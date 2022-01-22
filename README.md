# FullStackReactApp


## App Features:
- [x] Registration:
- [x] Login:
- [x] Forgot Password:
    - [x] Send an email with token (default expire time one hour):
    - [x] Token check (valid and not expired):
    - [x] Render new password page after Token is valid:
    - [x] Deleting used token after success password change:
- [x] User Settings:
    - [x] User Profile
    - [x] User Details
    - [ ] Password Change in profile
    - [x] Email change:
        - [x] Required current password before email change:
        - [x] Send an email with activation link after success change:
- [ ] Send message to support
- [x] Logout:

## Admin Features:
- [ ] App settings:
- [ ] Read users messages:

## Options Features:
###### Emails (enable/disable in settings/settings.ts server side)
- [x] Send an email after success registration:
- [x] Send an email after success password change:
- [x] Activation link after registration:
- [x] Forgot password email with token:

## Install Client/Server:

```sh
npm run install-client
npm run install-server
```

###### set up .env file for server

```sh
# App data
HOST = "localhost"
PORT = 3000

# Mysql connection
MYSQL_HOST = "localhost"
MYSQL_PORT = "3306"
MYSQL_USER = ""
MYSQL_PASSWORD = ""
MYSQL_DATABASE = "fullstackreactapp"

# Email connection
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 465
EMAIL_SECURE = true
EMAIL_ADDRESS = ""
EMAIL_PASSWORD = ""
```

###### create a .htaccess file and copy it to the client build

```sh
Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

###### after you created an empty database go to the server/src/settings/settings.ts file and

```sh
createDatabaseTables: true,
```

will create tables
turn it false after created

```sh
client: {
        information: "YOUR CLIENT URL HERE"
    }
```
this URL will appear in the email links (forgot email, user activation etc)
Sample: "YOUR CLIENT URL HERE"/user/activation/token

###### set the axios default URL parameter in client/src/axios/axios.js

your server ip here

```sh
const serverProxy = "http://localhost:5000"
```