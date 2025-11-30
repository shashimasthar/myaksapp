# Infrastructure Design & Component Overview

This document provides a deep dive into the infrastructure components designed and deployed for the Loan Application on Microsoft Azure.

## 1. High-Level Architecture
The infrastructure follows a **Cloud-Native** approach, leveraging managed services for scalability and reduced operational overhead.

```mermaid
graph TD
    User[Internet User] -->|TCP/80| LB[Azure Load Balancer]
    subgraph "Azure Kubernetes Service (AKS)"
        LB -->|Route| SvcFront[Frontend Service]
        SvcFront -->|Select| PodFront[Frontend Pods (Nginx/React)]
        PodFront -->|HTTP/8080| SvcBack[Backend Service]
        SvcBack -->|Select| PodBack[Backend Pods (Spring Boot)]
        PodBack -->|TCP/27017| SvcMongo[Mongo Service]
        SvcMongo -->|Select| PodMongo[Mongo StatefulSet]
    end
    subgraph "Azure Resources"
        ACR[Azure Container Registry]
        Disk[Azure Managed Disk]
    end
    PodMongo -->|Mount| Disk
    AKS -->|Pull Images| ACR
```

## 2. Azure Components (Terraform Managed)

### 2.1. Resource Group (`azurerm_resource_group`)
*   **Purpose**: Logical container for all resources.
*   **Location**: West US 2 (Configurable).

### 2.2. Azure Container Registry (ACR) (`azurerm_container_registry`)
*   **Purpose**: Stores private Docker images for Frontend and Backend.
*   **SKU**: Basic (Cost-effective for demos).
*   **Security**: Integrated with AKS via Managed Identity (AcrPull role).

### 2.3. Azure Kubernetes Service (AKS) (`azurerm_kubernetes_cluster`)
*   **Purpose**: Orchestrates container deployment, scaling, and management.
*   **Node Pool**:
    *   **Count**: 1 Node (Cost-optimized).
    *   **VM Size**: `Standard_D2s_v4` (General purpose).
*   **Identity**: System Assigned Managed Identity (for secure Azure interactions).

## 3. Kubernetes Components (Manifest Managed)

### 3.1. Compute (Workloads)
*   **Frontend Deployment**:
    *   **Replicas**: 1 (Scalable).
    *   **Image**: Nginx serving React static files.
    *   **Security**: Runs as unprivileged user (`nginx`).
    *   **Resources**: Capped CPU/Memory to ensure stability.
*   **Backend Deployment**:
    *   **Replicas**: 1 (Scalable).
    *   **Image**: Spring Boot JAR.
    *   **Probes**: Liveness and Startup probes for self-healing.
    *   **Security**: Runs as non-root `appuser`.
*   **MongoDB StatefulSet**:
    *   **Purpose**: Database persistence.
    *   **Type**: StatefulSet (ensures stable network ID `mongo-0`).

### 3.2. Networking
*   **Frontend Service**:
    *   **Type**: `LoadBalancer`.
    *   **Function**: Provisions a public Azure Load Balancer IP to expose the app to the internet.
*   **Backend Service**:
    *   **Type**: `ClusterIP` (Internal only).
    *   **Function**: Internal load balancing for API calls.
*   **Mongo Service**:
    *   **Type**: `ClusterIP` (Headless).
    *   **Function**: Stable DNS discovery for the database.

### 3.3. Storage
*   **PersistentVolumeClaim (PVC)**:
    *   **Name**: `mongo-persistent-storage`.
    *   **Size**: 1Gi.
    *   **Class**: `default` (Azure Managed Disk).
    *   **Function**: Ensures database data survives pod restarts.

## 4. Security & Compliance
*   **RBAC**: AKS Kubelet Identity is granted `AcrPull` role on ACR (No hardcoded docker credentials).
*   **Network Isolation**: Backend and Database are not exposed publicly (ClusterIP only).
*   **Resource Quotas**: CPU/Memory requests defined to prevent "noisy neighbor" problems.
*   **Immutable Infrastructure**: Infrastructure is defined as code (Terraform), ensuring reproducibility.
