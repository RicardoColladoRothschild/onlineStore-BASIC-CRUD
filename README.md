# E-commerce

This project is build to practice backend and frontend.
I use a basic CRUD, where an user is able to purchase a product, and/or send it to a cart. 
Product in cart can be buy by the user, using a prestablish credit available for every new user, 
that is deducted every time a suer consume a product. 

## Page flow
First thing user see is a login view, where needs to put information, that information is requested to the backend, if
it match any previous data, it will go to the next page. 

## Backend
The backend directory holds all of the backend functionality:
* Server
* data base management
* clases
* handle events and others




## How to test web app:
1) First need to run the server, you will need to install some dependecies:
    *ts-node
    *types/express
    *types/node
    These dependicies are necesary, because project was develop using typescript with node, and express.
2) Once server is running, the initial web site, the index, should be locahost:PORT, being port the port that was assgined.     


## Clase Login
Our Login class will be an object,, that will hold user basic data from the current user that is login, this data, will be retreive from the data base, once a user login,
this object will be access by the entire application. 


## ConfirmUser class specs:

Confirm User
Esta clase es la que hace el request a la base de datos, hace un query, para
buscar un match de un nombre de usuario, y un email identico, una vez
que los encuentra, esta clase, debe usar un "bycrypt" y verificar si el hash guardado en la
base de datos para ese usuario, coincide con el hash que podria haber generado la password
que se creo al crear el objeto user al que dicho usuario pertenece. 

This calss receive a "login" object and use it password, email and name to confirm if data base info match, if it does, it create
 a new object: User logged, which will contain current user order, credit, configuration
