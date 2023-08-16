# API Specs

## Technologies

- Rust – Programming language.
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
