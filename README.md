# Simple Node.js App with CI/CD Pipeline

A simple Continuous Integration/Continuous Delivery (CI/CD) pipeline using GitHub Actions. It features a basic web server built with Node.js, a CI pipeline to perform code quality checks (Linting) and run tests, and a CD pipeline to push Docker images to AWS ECR.


## Project Overview

This Node.js application is a basic web server that listens for HTTP requests and responds with a simple "Hello, World!" text.


## Continuous Integration (CI)
Automatically triggered on:
- Pushes to the `main` branch
- Pull requests targeting the `main` branch

CI pipeline performs the following steps:
1.  **Checkout code:** Checks out the repository code into the workflow's workspace.
2.  **Set up Node.js:** Sets up the specified version of the Node.js environment.
3.  **Install dependencies:** Executes `npm install` to install the project's dependencies.
4.  **Run lint:** Executes ESLint to check the code style and quality. The workflow will fail if linting errors are found.
5.  **Run tests:** Executes Jest to run the application's tests. The workflow will fail if tests fail.


## Continuous Delivery (CD)
Automatically triggered after a successful CI job, when the following condition is met:
- Triggering branch is the `main` branch.

The CD pipeline performs the following steps:

1.  **Configure AWS credentials:** Configures AWS credentials using secrets stored in GitHub.
2.  **Login to Amazon ECR:** Logs in to the Amazon Elastic Container Registry (ECR) using the AWS CLI.
3.  **Build and push Docker image:**
    * Builds a Docker image using the `Dockerfile`.
    * Tags the image with the commit SHA and pushes it to the specified AWS ECR repository.


## AWS ECR Deployment
This project is configured to automatically push Docker images to AWS ECR upon pushes to the `main` branch. Deploying the image to your AWS requires additional configuration on the AWS side.

### Prerequisites
- AWS account
- Existing ECR repository
- IAM user with permissions to push images to the ECR repository, with its credentials stored as GitHub repository secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`).
