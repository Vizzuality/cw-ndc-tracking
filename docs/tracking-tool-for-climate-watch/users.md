# User Management

Users, Trusted users and Admins are stored in a single `users` table. They are differentiated by having the `status` flag set to ADMIN, TRUSTED or USER respectively.

Users can be managed via an admin tool powered by ActiveAdmin at `/admin`.

## Authentication

Users and Admins can be authenticated by email and password using either the ActiveAdmin html form, or a json request which returns their authentication token. Further API calls need to include user's email and token.

```
curl "http://localhost:3000/api/v1/sections" -H "Content-Type: application/json" -H "Accept: application/json"
```

```
{
   "error":"You need to sign in or sign up before continuing."
}
```

To sign in and retrieve the token:

```
curl "http://localhost:3000/users/sign_in" -X POST -d '{"user": {"email":"user@example.com", "password":"password"}}' -H "Content-Type: application/json" -H "Accept: application/json"
```

```
{
   "id":2,
   "email":"user@example.com",
   "created_at":"2018-07-30T09:36:44.058Z",
   "updated_at":"2018-07-30T09:36:44.058Z",
   "country_iso_code":"BRA",
   "authentication_token":"N37yhaWqyszDyHvBBxXX",
   "first_name":"API user",
   "last_name":"Brazil",
   "status":"USER",
   "organisation":null,
   "sector":null,
   "data_usage":null,
   "tester":false
}
```

An authenticated API call:

```
curl "http://localhost:3000/api/v1/sections" -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: N37yhaWqyszDyHvBBxXX"
```

```
[
   {
      "title":"Planning",
      "slug":"planning"
   },
   {
      "title":"Tracking",
      "slug":"tracking"
   }
]
```

## Authorisation

Authorisation is implemented using CanCan gem. Admin users can manage all objects in the system, API users have the permissions restricted to objects they "own" (e.g. their user record).

## User self-registration

Users can create non-admin accounts in the system themselves. They need to fill in their name, email and password.

```
curl "http://localhost:3000/users" -X POST -d '{"user": {"email":"user1@example.com", "password":"password", "first_name":"John", "last_name": "Doe"}}' -H "Content-Type: application/json" -H "Accept: application/json"
```

Note that any other parameters will not be let through, so e.g. trying to make yourself an admin in this way won't work.

When the request is not successful the response has 422 code and payload includes an explanation of the error.

```
{
   "errors":{
      "email":[
         "has already been taken"
      ]
   }
}
```

When the request is successful, the response includes the authentication token:

```
{
   "id":3,
   "email":"user1@example.com",
   "created_at":"2018-07-30T09:38:27.869Z",
   "updated_at":"2018-07-30T09:38:27.869Z",
   "country_iso_code":"XXX",
   "authentication_token":"nsoLo8nCFCDB1JWk3YPx",
   "first_name":"John",
   "last_name":"Doe",
   "status":"USER",
   "organisation":null,
   "sector":null,
   "data_usage":null,
   "tester":false
}
```

## Retrieving logged in user's profile information

```
curl "http://localhost:3000/users/profile" -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: N37yhaWqyszDyHvBBxXX"
```

```
{
   "id":2,
   "email":"user@example.com",
   "created_at":"2018-07-30T09:36:44.058Z",
   "updated_at":"2018-07-30T09:36:44.058Z",
   "country_iso_code":"BRA",
   "authentication_token":"N37yhaWqyszDyHvBBxXX",
   "first_name":"API user",
   "last_name":"Brazil",
   "status":"USER",
   "organisation":null,
   "sector":null,
   "data_usage":null,
   "tester":false
}
```

## Updating logged in user's profile information

```
curl "http://localhost:3000/users" -X PUT -d '{"user": {"first_name":"new name", "organisation":"new organisation"}}' -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: N37yhaWqyszDyHvBBxXX"
```

## Updating logged in user's password

It requires providing the current password. This will fail:

```
curl "http://localhost:3000/users" -X PUT -d '{"user": {"email":"user@example.com", "password":"new password"}}' -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: N37yhaWqyszDyHvBBxXX"
```

```
{
   "errors":{
      "current_password":[
         "can't be blank"
      ]
   }
}
```

This will work:
```
curl "http://localhost:3000/users" -X PUT -d '{"user": {"password":"new password", "current_password": "password"}}' -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: N37yhaWqyszDyHvBBxXX"
```
