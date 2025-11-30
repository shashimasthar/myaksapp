# Design & Architecture Document - EBRD Loan Application

## 1. Overview
The **EBRD Loan Application** is a modern, cloud-native web application designed to facilitate loan applications and EMI calculations. It mimics the professional aesthetic of the European Bank for Reconstruction and Development (EBRD) website.

## 2. Architecture
The application follows a **Microservices-ready** architecture, containerized and deployed on **Azure Kubernetes Service (AKS)**.

```mermaid
graph TD
    User[User Browser] -->|HTTP/HTTPS| LB[Azure Load Balancer]
    LB -->|Traffic| Frontend[Frontend Pod (React/Nginx)]
    Frontend -->|API Calls| Backend[Backend Pod (Spring Boot)]
    Backend -->|Read/Write| DB[(MongoDB)]
```

### Components
1.  **Frontend**:
    *   **Framework**: React (Vite)
    *   **Styling**: Custom CSS (EBRD Theme), Responsive Grid.
    *   **Routing**: React Router DOM (Client-side routing).
    *   **Visualization**: Recharts for data visualization.
    *   **Hosting**: Nginx (Unprivileged container).

2.  **Backend**:
    *   **Framework**: Spring Boot 3 (Java 17).
    *   **Database**: MongoDB (NoSQL).
    *   **Features**: REST API, Input Validation, EMI Calculation Logic.
    *   **Observability**: Spring Boot Actuator.
    *   **Security**: CORS configured, Non-root container execution.

3.  **Infrastructure**:
    *   **Platform**: Azure Kubernetes Service (AKS).
    *   **Registry**: Azure Container Registry (ACR).
    *   **IaC**: Terraform (Resource Group, AKS, ACR).
    *   **CI/CD**: GitHub Actions (Automated Build & Deploy).

## 3. Security Measures
*   **Least Privilege**: Containers run as non-root users (`appuser`, `nginx`).
*   **Resource Management**: Kubernetes Resource Requests and Limits defined to prevent noisy neighbor issues.
*   **Network Security**: CORS restricted (configurable).
*   **Secrets**: Database credentials managed via Kubernetes Secrets (Planned/Implemented).

## 4. Scalability & Reliability
*   **Stateless Backend**: The Spring Boot application is stateless, allowing horizontal scaling (increasing replica count).
*   **Load Balancing**: Azure Load Balancer distributes traffic across pods.
*   **Health Checks**: Liveness and Startup probes configured to ensure zero-downtime deployments and auto-recovery.

## 5. Future Improvements
*   **Authentication**: Integrate Azure AD or OAuth2 for user login.
*   **HTTPS**: Enable TLS/SSL using Cert Manager and Let's Encrypt.
*   **Monitoring**: Integrate Prometheus and Grafana for visualizing Actuator metrics.
