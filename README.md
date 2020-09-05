# HWK 18(21) - Google Books Search

## Description

The idea of this repo is an assignment to demonstrate a React-based GOogle BOoks Search Application. It requires to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Node, Express and MongoDB are required so that users can save books to review or purchase later.

```
As a user, I want to be able to search for a book, save/delete for later.
```

#### Author

![user's avatar](https://avatars.githubusercontent.com/u/58826890?v=4&s=100)
user: [ichoi21](https://github.com/ichoi21) | email: ic@g.co | repos: [Click Here](https://github.com/ichoi21?tab=repositories)

---

#### Languages + Reference Used

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://www.Reactjs.org)
- [Node](https://nodejs.org/en/)
- [JavaScript](https://www.JavaScript.com)
- [Bootstrap](https://getbootstrap.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Instructions

- This application requires at minimum 2 pages, check out the following mockup images for each page:

  - [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  - [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 07-Ins_Mern example as a base for your application.
2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.
3. Using mongoose, then create a Book schema.
4. At a minimum, books should have each of the following fields:

- `title` - Title of the book from the Google Books API
- `authors` - The books's author(s) as returned from the Google Books API
- `description` - The book's description as returned from the Google Books API
- `image` - The Book's thumbnail image as returned from the Google Books API
- `link` - The Book's information link as returned from the Google Books API
- Creating `documents` in your `books` collection similar to the following:

  ```js
  {
    authors: ["Suzanne Collins"];
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.";
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api";
    title: "The Hunger Games";
  }
  ```

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

- The layout should include at least two React Components for each page `Search` and `Saved`.

- Feel free to try out alternative CSS framework to Bootstrap.

6. Add the following Express routes for your app:

- `/api/books` (get) - Should return all saved books as JSON.
- `/api/books` (post) - Will be used to save a new book to the database.
- `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
- `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

- Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Minimum Requirements and Submission

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

Following will required for submission:

- The URL to the deployed application
- The URL to the GitHub repository

#### Bonus Live Updates to Saved Books

- Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  - Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  - [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

### How to install

Perform the following:

```bash
git clone https://github.com/ichoi21/HWK18.git
npm install
npm start
```

Open the browser and visit [http://localhost:3000/](http://localhost:3000/)

To use the deployed application, click [here](https://ic-gbooks.herokuapp.com/)
