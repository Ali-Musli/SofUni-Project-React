# Travel-Blog-Documentation

## Description
The app allows visitors to browse different types of posts. Users can register with an email and password, which allows them to create their own post. Post authors can also edit or delete their own posts at any time.

### Navigation Bar
Guests (un-authenticated visitors) can see the links to the All Posts (Catalogue) page, as well as the links to the Login, Register and Home pages. The logged-in user can see the links to the All Posts (Catalogue), Create Post, My Posts, Logout and Home page.

### Login Page
The Login page contains a form for existing user authentication. By providing an email and password, the app will login a user in the system if there are no empty fields.

Upon success, the REST service will return information about the existing user along with a property accessToken, which contains the session token for the user. The information will be store in localStorage, in order to be able to perform authenticated requests. 

If the login is successful, the user will be redirect to the Home page. 

### Register Page
The Register page contains a form for new user registration. By providing an email, password and confirm password the app should register a new user in the system if there are no empty fields. 

Upon success, the REST service will return the newly created object with an automatically generated _id and a property accessToken, which contains the session token for the user. The information will be store in localStorage, in order to be able to perform authenticated requests.

If the register is successful, the user will be redirect to the Home page. 

### Logout
The logout action is available to logged-in users. 

Upon success, the REST service will return an empty response and the session information will be cleared.

If the logout was successful, the user will be redirect to the Home page. 

### All Posts Page
This page displays a list of all posts in the system, with their title and location. Clicking on any of the cards leads to the details page for the selected post.

If there are no post (unauthenticated visitors), the button for "Login" will be available. If there are no post (authenticated visitors), the button for "Create" will be available. 

### Home Page
All users will be greeted from the homepage. The button for "See all posts" will be available. 

### Create Game
The Create page is available to logged-in users. It contains a form for creating new post. If some of the form fields are not filled in, a post cannot be created.

Upon success, the REST service will return he newly created record. 

If the create of post is successful, the user will be redirect to the All Posts Page.

### Details Page
All users can view details about posts. Clicking the Details link in of a post should display the Details page.

If the currently logged in user is the creator of the post, the Edit and Delete will be displayed, otherwise they will not be available. If the currently logged in user is not the creator of the post they will have option to add a comment for curent post and see who is the owner of the post.

### Edit Page
The Edit page is accessible to logged-in users and allows the author to edit their own posts. Clicking the Edit a specific game link on the details page will display the Edit page. It contains a form with input fields for all relevant properties. If some of the form fields are not filled in, a post cannot be edited.

Upon success, the REST service will return he edited record. 

Upon success, the user will be redirected to the Details page for the current game.

### Delete Page
The delete action is available to logged-in users, for post they have created. When the author clicks on the Delete action on any of their posts, a confirmation dialog should be displayed, and upon confirming this dialog, the post will be deleted from the system.

Upon success, the REST service will return an object, containing the deletion time.

Upon success, the user will be redirected to the All Posts Page.

### Comments
Every logged-in user will be able to comments other posts, but not his own. Guest will not be able to see the section Add new comment, but will be able to see the section Comments.

### My Posts Page
This page displays a list of all posts in the system for the current user, with their title and location. Clicking on any of the cards takes you to the details page for the selected publication.

If there are no post, the button for "Create" will be available. 



## Technologies Used
+ React
+ HTML
+ CSS
+ React Bootstrap
+ JavaScript
