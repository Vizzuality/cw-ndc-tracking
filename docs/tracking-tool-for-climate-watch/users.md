## User Management

Users and Admins are stored in a single `users` table. Admin users are differentiated by having the `is_admin` flag set.

Users and Admins can be managed via an admin tool powered by ActiveAdmin at `/admin`.

## Authentication

Users and Admins can be authenticated by email and password using either the ActiveAdmin html form, or a json request which returns their authentication token. Further API calls need to include user's email and token.

```
curl "http://localhost:3000/api/v1/sections" -H "Content-Type: application/json" -H "Accept: application/json"
{"error":"You need to sign in or sign up before continuing."}
```

To sign in and retrieve the token:

```
curl "http://localhost:3000/users/sign_in" -X POST -d '{"user": {"email":"user@example.com", "password":"password"}}' -H "Content-Type: application/json" -H "Accept: application/json"
{"id":2,"name":"API user Brazil","email":"user@example.com","is_admin":false,"created_at":"2018-04-26T09:41:54.655Z","updated_at":"2018-04-26T09:41:54.655Z","country_iso_code":"BR","authentication_token":"xTHm1Fmy8ffYEsquKAVM"}
```

An authenticated API call:

```
curl "http://localhost:3000/api/v1/sections" -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: xTHm1Fmy8ffYEsquKAVM"
[{"title":"Planning","slug":"planning"},{"title":"Tracking","slug":"tracking"}]
```

## Authorisation

Authorisation is implemented using CanCan gem. Admin users can manage all objects in the system, API users have the permissions restricted to objects they "own" (e.g. their user record).

## User self-registration

Users can create non-admin accounts in the system themselves. They need to fill in their name, email and password.

```
curl "http://localhost:3000/users" -X POST -d '{"user": {"email":"user1@example.com", "password":"password", "first_name":"John", "last_name": "Doe"}}' -H "Content-Type: application/json" -H "Accept: application/json"
```

Note that any other parameters will not be let through, so e.g. trying to make yourself an admin in this way won't work.

The response includes the authentication token:

```
{"id":10,"email":"user1@example.com","is_admin":false,"created_at":"2018-07-25T13:11:09.601Z","updated_at":"2018-07-25T13:11:09.601Z","country_iso_code":"XXX","authentication_token":"Lb-JxeLLavPXxtmuP1Jf","first_name":"John","last_name":"Doe"}
```

