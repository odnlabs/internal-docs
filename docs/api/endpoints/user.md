# User Endpoints

### Base Paths

```
/users
```

All user endpoints require a valid JWT token in the `Authorization` header.

## Endpoints

| Path           | Method | Description                        |
| -------------- | ------ | ---------------------------------- |
| `/`            | GET    | Get all users                      |
| `/`            | POST   | Create a new user                  |
| `/:id`         | GET    | Get a user by id                   |
| `/:id`         | PUT    | Update a user by id                |
| `/:id`         | DELETE | Delete a user by id                |
| `/me`          | GET    | Get the current user               |
| `/me`          | PUT    | Update the current user            |
| `/me`          | DELETE | Delete the current user            |
| `/me/password` | PUT    | Update the current user's password |
| `/me/password` | DELETE | Delete the current user's password |
