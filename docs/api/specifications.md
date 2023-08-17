# API Specs

## Technologies

#### Programming Language

Rust is the programming language of choice for our API, for it's performance, safety, ecosystem, and interoperability.

#### Framework

Axum is the backend framework we use. Considering it's backed by tokio, we trust it as a reliable and well-maintained framework to use in our ecosystem.

#### Database



- Axum – Primary backend framework.
- MongoDB – Database.
- Docker – Create a containerized environment for the API to run in.
- Git/GitHub – Version control and project code management.

Other technologies include using JSON as the data format, JWT for authentication, and WebSocket for live connections.

## Endpoints

| Page        | Path      | Method | Brief Description                                      |
| ----------- | --------- | ------ | ------------------------------------------------------ |
| notify list | `/notify` | `POST` | Add user to notify list and create Discord Notifiction |
| notify list | `/notify` | `GET`  | Get all emails on the notify list                      |
