# Make a NodeJS rest api
## MCM 2018 - API

Simple API for authentication in nodeJs

 - Authentication local * jwt
 - User can create post

 ### Part 1, Setup (Branch API_p_01)
 #### To add
 - editconfig
 - express
 - eslink
 - babel
 - webpack 2 
 - Add mongoose, body-parser, morgan, compression, helmet
 - Setup config folder
 - Setup constants

Config Branch - OK

 ### Part 2, Setup (Branch Models)
 #### To add
 - Create the user model, controller and routes
 - Add joi for validation with express-validation

### Part 3, Setup (Branch Security)
#### To add
 - Create the user model, controller and routes
 - Signup user
 - Add joi for validation with express-validation
 - Add rimraf 
 - Crypt the user password
 - Create the localStrategy with passport
 - Log a user
 - Create a secret password for the jwt
 - Add passport-jwt strategy


### Part 4, Setup (Branch Posts)
#### To add
- Create the post model
- Add the user id as the author


### Part 5, Setup (Branch User)
#### To add
- Populate User
- User toAuthJSON vs toJSON
