# Build Guide: Modern Loan Application on Azure Kubernetes Service (AKS)

This guide provides a step-by-step walkthrough to build, containerize, and deploy a modern Loan Application using **Spring Boot**, **React**, and **MongoDB** on **Azure AKS**.

## 1. Project Overview
*   **Frontend**: React (Vite) with a corporate "EBRD" theme, Recharts for visualization, and Nginx for serving.
*   **Backend**: Spring Boot 3 (Java 17) REST API with MongoDB.
*   **Infrastructure**: Azure AKS (Kubernetes) and ACR (Container Registry) managed via Terraform.
*   **Security**: Non-root containers, Resource Limits, and CORS enabled.

## 2. Prerequisites
Ensure you have the following tools installed:
*   **Java 17 JDK** & **Maven**
*   **Node.js** & **npm**
*   **Docker Desktop**
*   **Azure CLI** (`az login`)
*   **Terraform**
*   **Kubectl**

---

## 3. Step-by-Step Implementation

### Step 1: Backend Development (Spring Boot)
1.  Initialize a Spring Boot project with dependencies: `Spring Web`, `Spring Data MongoDB`, `Validation`, `Lombok`, `Actuator`.
2.  Create the `LoanRequest` model and `LoanRepository` (MongoRepository).
3.  Implement `LoanService` with business logic for EMI calculation.
4.  Create `LoanController` to expose REST endpoints (`POST /api/loans`, `GET /api/loans`).
5.  **Dockerfile**: Use a multi-stage build with `eclipse-temurin:17-jre` and run as a non-root user (`appuser`).

### Step 2: Frontend Development (React)
1.  Initialize a Vite project: `npm create vite@latest frontend -- --template react`.
2.  Install dependencies: `npm install react-router-dom recharts`.
3.  **Styling**: Apply the "EBRD" theme (Deep Blue `#1b365d`, Roboto font) in `index.css`.
4.  **Components**:
    *   `Navbar.jsx`: Sticky header with navigation.
    *   `Home.jsx`: Landing page with Hero section and Stats ribbon.
    *   `LoanForm.jsx` & `EmiCalculator.jsx`: Functional forms.
    *   `Dashboard.jsx`: Charts using Recharts.
5.  **Dockerfile**: Use `nginxinc/nginx-unprivileged:alpine` to serve the static build.

### Step 3: Infrastructure as Code (Terraform)
1.  Create `main.tf` to provision:
    *   `azurerm_resource_group`
    *   `azurerm_container_registry` (ACR)
    *   `azurerm_kubernetes_cluster` (AKS)
2.  Run `terraform init` and `terraform apply`.

### Step 4: Kubernetes Manifests
Create YAML files in `k8s/` folder:
*   `mongo.yaml`: StatefulSet for MongoDB with PersistentVolumeClaim.
*   `backend.yaml`: Deployment for Spring Boot app. **Important**: Set Resource Requests (e.g., `cpu: 10m`) to fit on small nodes.
*   `frontend.yaml`: Deployment for React app.
*   `ingress.yaml`: LoadBalancer service to expose the Frontend.

### Step 5: CI/CD Pipeline (GitHub Actions)
Create `.github/workflows/deploy.yaml`:
1.  **Build**: Checkout code, Set up Java/Node, Build JAR/Dist.
2.  **Docker**: Build and Push images to Azure ACR.
3.  **Deploy**: Authenticate with Azure and run `kubectl apply -f k8s/`.

---

## 4. Security Hardening
*   **Least Privilege**: Ensure Dockerfiles create and switch to a non-root user.
*   **Resource Limits**: Define `requests` and `limits` in K8s YAMLs to prevent resource starvation.
*   **CORS**: Configure `@CrossOrigin` in Spring Boot Controller.
*   **Secrets**: Use K8s Secrets for sensitive data (DB passwords).

---

## 5. Running the Application

### Option A: Local (Docker Compose)
```bash
docker-compose up --build
```
Access Frontend at `http://localhost:5173`.

### Option B: Cloud (AKS)
1.  **Login to Azure**:
    ```bash
    az login
    az aks get-credentials --resource-group aks-demo-rg --name aks-demo-cluster
    ```
2.  **Deploy**:
    ```bash
    kubectl apply -f k8s/
    ```
3.  **Get IP**:
    ```bash
    kubectl get svc frontend
    ```
    Access the External IP in your browser.

---

## 6. Troubleshooting
*   **Pending Pods**: Usually means "Insufficient CPU/Memory". Reduce resource requests in YAML files.
*   **CrashLoopBackOff**: Check logs (`kubectl logs <pod>`). Often due to DB connection failure.
*   **Azure Login Failed**: Regenerate Service Principal and update GitHub Secrets (`AZURE_CREDENTIALS`).
