## Backend api list

| URL Endpoint               | API Method | API's Purpose                                | Request Body                                                                                  | Response Body                                              |
| -------------------------- | ---------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `/`                        | GET        | Welcome message for the API                  | None                                                                                          | `{"message": "Welcome to a todolist example of FastAPI!"}` |
| `/todos/all/{user_id}`     | GET        | Get all todos by user ID                     | user_id: str                                                                                  | List of all todos or an error message                      |
| `/todos/{task}`            | GET        | Get todos by task                            | task: str                                                                                     | Single todo item or error message                          |
| `/todos/create`            | POST       | Post todos (create new todos object in list) | `{"id": str, "task": str, "completed": bool, "datetime": str, "userId": str`                  | New todo item or error message                             |
| `/todos/edit/{todo_id}`    | PUT        | Update todos                                 | todo_id: str and `{"id": str, "task": str, "completed": bool, "datetime": str, "userId": str` | Updated todo item or error message                         |
| `/todos/delete/{todos_id}` | DELETE     | Delete todos by id                           | todos_id: str                                                                                 | Success message or error message                           |

## To test out the session

- inspect web
- ⁠login
- ⁠once logged in, you will see the api call to create the session, and the cookie will be set once successful
- ⁠to test the verification, return back to login page without signing out (change the url to /login)
- ⁠signout to delete session

## To test out cookies

change language feature and the language cookie in the browser will be set

## LIVE Site

https://week9-todolist-fe.vercel.app/

## SS of test out session

### WHOAMI login session

<img src="https://github.com/tirzagabriella/Week9-Todolist-FE/blob/main/Screenshot/whoami_get_session.jpeg" width="700" height="400" />

### User create session

<img src="https://github.com/tirzagabriella/Week9-Todolist-FE/blob/main/Screenshot/user_create_session.jpeg" width="700" height="400" />

## SS of test out cookies

### User preferences cookies

<img src="https://github.com/tirzagabriella/Week9-Todolist-FE/blob/main/Screenshot/user_preferences_cookies_language.jpeg" width="700" height="400" />

## SS of addressed CORS

<img src="https://github.com/tirzagabriella/Week9-Todolist-FE/blob/main/Screenshot/addressed_CORS.jpeg" width="700" height="400" />
<img src="https://github.com/tirzagabriella/Week9-Todolist-FE/blob/main/Screenshot/CORS.jpeg" width="700" height="400" />
