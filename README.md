# Backend KPI Lab 1

**Author:** Oleksandr Rodina, group IM-33

**Every lab builds on the previous one**

**Deployed version:** [https://backend-kpi-lab1.onrender.com/healthcheck](https://backend-kpi-lab1.onrender.com/healthcheck)

## Requirements

- **Node.js** (v18.x or higher)
- **Docker**
- **Docker Compose**

## Environment Variables

This project uses environment variables for configuration. You need to create a `.env` file in the root of the project.

The file should contain the following variables:

`PORT`: The port on which the application server will run.

```
PORT=8000
```

**Default PORT is 3000 if not set in `.env` file**

## Setup and Usage

### 1. Clone the repository

```bash
git clone <repo_url>
cd <repo_name>
```

### 2. Choose a way to run the application

#### Option A: Running Locally (without Docker)

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The application will be available at `http://localhost:PORT` (where `PORT` is the value from your `.env` file, e.g., `http://localhost:8000`).

---

#### Option B: Running with Docker

```bash
# 1. Build the Docker image
sudo docker build -t api:latest .

# 2. Run the container
# -e PORT=8000   : Passes the PORT environment variable to the container
sudo docker run -it --rm --network=host -e PORT=8000 api:latest
```

The application will be available at `http://localhost:8000`.

---

#### Option C: Running with Docker Compose

```bash
sudo docker compose up
```

_For older versions, you might need the command with a hyphen:_

```bash
sudo docker-compose up
```

### Health Check

After starting the application using any of the methods, you can check if the service is running correctly by accessing the healthcheck endpoint:

`http://localhost:PORT/healthcheck`
