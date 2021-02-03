# Mineralopedia

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Tree](#component-tree)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Mineralopedia** is a (soon to be fully searchable) database of common minerals and their properties that will act as a guide to proper identification and as a reference. Users will be able to register an account that will allow them to add minerals to favorites and add, edit, and delete comments._

<br>

## MVP

_The **Mineralopedia** MVPs described below will outline the project in clear and discernable steps, in order to ensure the final deliverable is achievable within the time frame given, and that it meets all requirements set forth for the project._

<br>

### Server (Back End) <!-- omit in toc -->

- Have a RESTful JSON API:
  - Build a Ruby on Rails server containing RESTful JSON endpoints.
  - Build a database with at least 3 tables.
    - There must be at least 1 association between your tables.
  - Utilize Rails to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD between your non-User tables:
  - `index`
  - `show`
  - `create`
  - `update`
  - `delete`

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive React app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use only React for DOM Manipulation.
- Consume data from your Ruby on Rails API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions on the front end.

### Styling <!-- omit in toc -->

- Be styled with CSS or SCSS.
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes, including desktop.

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all unnecessary code, including commented out code.

### Deployment <!-- omit in toc -->

- Deploy a fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.
- Deploy early and often.

### Procedural <!-- omit in toc -->

- Initialize a git repo on Github, with a links to the deployed project.
- Have **frequent commits**, making a _robust_ commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                                                |
| :--------------: | :------------------------------------------------------------------------------------------------------------------------- |
|      React       | _An open-source, front end, JavaScript library for building user interfaces or UI components._                             |
|   React Router   | _Used to define multiple routes in the application._                                                                       |
| React Router DOM | _A popular and well-supported library and is the most preferred routing library for React applications._                   |
|      Axios       | _A great library for making client side HTTP calls._                                                                       |
|      Rails       | _A model-view-controller (MVC) framework, providing default structures for a database, a web service, and web pages._      |
|      Bcrypt      | _A password-hashing function designed by Niels Provos and David Mazières._                                                 |
|       Cors       | _Allows restricted resources on a web page to be requested from another domain outside the first domain which was served._ |
|   FontAwesome    | _Library of icons._                                                                                                        |

<br>

### Client (Front End)

#### Wireframes

- Landing Screen

![Mobile Landing](https://i.imgur.com/kFn11TC.png)

- Mineral Identification and Favorites Screens

![Mineral ID and Favorites](https://i.imgur.com/7rKeDVs.png)

- Detail Screen and Popup Menu

![Detail and Popup Menu](https://i.imgur.com/pGMgFlP.png)

- Sign In and Register Screens

![Sign In and Register](https://i.imgur.com/PErZiYO.png)

- Comment, Update Comment, Comments Screen

![Comment](https://i.imgur.com/b3AiV4z.png)

- Gallery and Search Screen

![Gallery and Search](https://i.imgur.com/9UAvPgm.png)

#### Component Hierarchy

```structure

src

|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Drawer.jsx
      |__ Layout.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ minerals.js
      |__ comments.js
|__ screens/
      |__ AddComment.jsx
      |__ Comment.jsx
      |__ Comments.jsx
      |__ EditComment.jsx
      |__ Login.jsx
      |__ MineralDetail.jsx
      |__ Minerals.jsx
      |__ Register.jsx

```

#### Component Tree

[Component tree](https://whimsical.com/mineralopedia-component-tree-QeABtNUy95JuPC7fgscrHA)

#### Time Estimates

| Task                      | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------------: | :-----------: | :---------: |
| Build models in rails     |     1 hrs      |     4 hrs     |    4 hrs    |
| Find assets               |     4 hrs      |     4 hrs     |    4 hrs    |
| Set up seed file          |     2 hrs      |     2 hrs     |    2 hrs    |
| Build controllers         |     2 hrs      |     4 hrs     |    4 hrs    |
| Build out routes          |     2 hrs      |     4 hrs     |    4 hrs    |
| Create React app          |     1 hrs      |     1 hrs     |    1 hrs    |
| Build Home.jsx            |     2 hrs      |     0 hrs     |    0 hrs    |
| Build Register/Login.jsx  |     2 hrs      |     2 hrs     |    2 hrs    |
| Build Search.jsx          |     3 hrs      |     0 hrs     |    0 hrs    |
| Build Nav.jsx             |     2 hrs      |     2 hrs     |    2 hrs    |
| Build Layout.jsx          |     2 hrs      |     1 hrs     |    1 hrs    |
| Build MineralIdentify.jsx |     3 hrs      |     0 hrs     |    0 hrs    |
| Build Gallery.jsx         |     2 hrs      |     2 hrs     |    2 hrs    |
| Build MineralDetail.jsx   |     2 hrs      |     2 hrs     |    2 hrs    |
| Build Comment.jsx         |     3 hrs      |     4 hrs     |    4 hrs    |
| Build EditComment.jsx     |     3 hrs      |     4 hrs     |    4 hrs    |
| Build Favorites.jsx       |     3 hrs      |     0 hrs     |    0 hrs    |
| Build out Services        |     5 hrs      |     4 hrs     |    4 hrs    |
| TOTAL                     |     40 hrs     |    40 hrs     |   40 hrs    |

<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://i.imgur.com/39EjLbV.png)

<br>

---

## Post-MVP

- Stylized grid image landing page for desktop
- Add Search
- Add Mineral ID
- Refine Mineral Identification search to account for edge cases (inputs that don't exactly match what is in the database)
- Add Favorites
- User uploaded images

## Code Showcase

```JAVASCRIPT
// Converts plain text chemcial formulas and converts them so that they display with the prop subtext
export const convertChemical = (str) => {
  // split the string
  // loop over array if element is a number then run .sub, if not return the element
    return str.split('').map((e) => {
      if (Number(e)) {
        return e.sub()
      } else {
        return e
      }
    }).join('');
  }
```

## Code Issues & Resolutions

> TBD.
