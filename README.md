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
