# Structures

## User

| Field      | Type     | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| id         | string   | The user's unique identifier.                |
| username   | string   | The user's username.                         |
| email      | string   | The user's email address.                    |
| password   | string   | The user's password.                         |
| avatar     | string   | The user's avatar.                           |
| created_at | datetime | The date and time the user was created.      |
| updated_at | datetime | The date and time the user was last updated. |

## Guild

| Field       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| id          | string   | The guild's unique identifier.                |
| name        | string   | The guild's name.                             |
| description | string   | The guild's description.                      |
| icon        | string   | The guild's icon.                             |
| banner      | string   | The guild's banner.                           |
| owner_id    | string   | The guild's owner's unique identifier.        |
| created_at  | datetime | The date and time the guild was created.      |
| updated_at  | datetime | The date and time the guild was last updated. |

## Guild Member

| Field      | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| id         | string   | The member's unique identifier.                |
| guild_id   | string   | The guild's unique identifier.                 |
| user_id    | string   | The user's unique identifier.                  |
| nickname   | string   | The member's nickname.                         |
| joined_at  | datetime | The date and time the member joined.           |
| updated_at | datetime | The date and time the member was last updated. |

## Guild Role

| Field       | Type     | Description                                  |
| ----------- | -------- | -------------------------------------------- |
| id          | string   | The role's unique identifier.                |
| guild_id    | string   | The guild's unique identifier.               |
| name        | string   | The role's name.                             |
| color       | string   | The role's color.                            |
| position    | integer  | The role's position.                         |
| permissions | integer  | The role's permissions.                      |
| created_at  | datetime | The date and time the role was created.      |
| updated_at  | datetime | The date and time the role was last updated. |

## Guild Ban

| Field      | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| id         | string   | The ban's unique identifier.                |
| guild_id   | string   | The guild's unique identifier.              |
| user_id    | string   | The user's unique identifier.               |
| reason     | string   | The reason for the ban.                     |
| created_at | datetime | The date and time the ban was created.      |
| updated_at | datetime | The date and time the ban was last updated. |

## Guild Channel

| Field       | Type     | Description                                     |
| ----------- | -------- | ----------------------------------------------- |
| id          | string   | The channel's unique identifier.                |
| guild_id    | string   | The guild's unique identifier.                  |
| name        | string   | The channel's name.                             |
| description | string   | The channel's description.                      |
| type        | integer  | The channel's type.                             |
| position    | integer  | The channel's position.                         |
| created_at  | datetime | The date and time the channel was created.      |
| updated_at  | datetime | The date and time the channel was last updated. |

## Guild Channel Message

| Field      | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| id         | string   | The message's unique identifier.                |
| channel_id | string   | The channel's unique identifier.                |
| user_id    | string   | The user's unique identifier.                   |
| content    | string   | The message's content.                          |
| created_at | datetime | The date and time the message was created.      |
| updated_at | datetime | The date and time the message was last updated. |

## Guild Channel Message Reaction

| Field      | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| id         | string   | The reaction's unique identifier.                |
| message_id | string   | The message's unique identifier.                 |
| user_id    | string   | The user's unique identifier.                    |
| emoji      | string   | The reaction's emoji.                            |
| created_at | datetime | The date and time the reaction was created.      |
| updated_at | datetime | The date and time the reaction was last updated. |

## Guild Channel Message Attachment

| Field      | Type     | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| id         | string   | The attachment's unique identifier.                |
| message_id | string   | The message's unique identifier.                   |
| user_id    | string   | The user's unique identifier.                      |
| name       | string   | The attachment's name.                             |
| url        | string   | The attachment's URL.                              |
| created_at | datetime | The date and time the attachment was created.      |
| updated_at | datetime | The date and time the attachment was last updated. |

## Guild Channel Message Embed

| Field       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| id          | string   | The embed's unique identifier.                |
| message_id  | string   | The message's unique identifier.              |
| user_id     | string   | The user's unique identifier.                 |
| title       | string   | The embed's title.                            |
| description | string   | The embed's description.                      |
| url         | string   | The embed's URL.                              |
| color       | string   | The embed's color.                            |
| created_at  | datetime | The date and time the embed was created.      |
| updated_at  | datetime | The date and time the embed was last updated. |

## Guild Channel Message Embed Field

| Field      | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------- |
| id         | string   | The field's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                |
| name       | string   | The field's name.                             |
| value      | string   | The field's value.                            |
| inline     | boolean  | Whether or not the field is inline.           |
| created_at | datetime | The date and time the field was created.      |
| updated_at | datetime | The date and time the field was last updated. |

## Guild Channel Message Embed Image

| Field      | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------- |
| id         | string   | The image's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                |
| url        | string   | The image's URL.                              |
| created_at | datetime | The date and time the image was created.      |
| updated_at | datetime | The date and time the image was last updated. |

## Guild Channel Message Embed Video

| Field      | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------- |
| id         | string   | The video's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                |
| url        | string   | The video's URL.                              |
| created_at | datetime | The date and time the video was created.      |
| updated_at | datetime | The date and time the video was last updated. |

## Guild Channel Message Embed Provider

| Field      | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| id         | string   | The provider's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                   |
| name       | string   | The provider's name.                             |
| url        | string   | The provider's URL.                              |
| created_at | datetime | The date and time the provider was created.      |
| updated_at | datetime | The date and time the provider was last updated. |

## Guild Channel Message Embed Author

| Field      | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| id         | string   | The author's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                 |
| name       | string   | The author's name.                             |
| url        | string   | The author's URL.                              |
| icon_url   | string   | The author's icon URL.                         |
| created_at | datetime | The date and time the author was created.      |
| updated_at | datetime | The date and time the author was last updated. |

## Guild Channel Message Embed Footer

| Field      | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| id         | string   | The footer's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                 |
| text       | string   | The footer's text.                             |
| icon_url   | string   | The footer's icon URL.                         |
| created_at | datetime | The date and time the footer was created.      |
| updated_at | datetime | The date and time the footer was last updated. |

## Guild Channel Message Embed Thumbnail

| Field      | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| id         | string   | The thumbnail's unique identifier.                |
| embed_id   | string   | The embed's unique identifier.                    |
| url        | string   | The thumbnail's URL.                              |
| created_at | datetime | The date and time the thumbnail was created.      |
| updated_at | datetime | The date and time the thumbnail was last updated. |
