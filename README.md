# Travel-Blog-Fullstack

Full stack web application

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
