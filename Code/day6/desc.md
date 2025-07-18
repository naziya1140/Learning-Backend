create a RESTfull API.

get /users - list all users(return back HTML Page).
get /api/users - list all the objects(raw data)
get /users/1 - get user with id 1
Post /user/:id - edit the user with given id.
delete /user/:id -delete the user with given id.

:id is called dynamic path parameter(can be accessed using req.params.id);


## About Middlewares.
when there is series of middleware then you need to call the next middleware or else the code
will not execute furthur.
next can be passed as third parameter of the callback function which will be executed at the end.
You 