# React + Vite

node modules - holds all packages that are needed to run react app -- nested dependencies
eg for packages -- babel, eslint,

dont use public folder for storing static assets insted use src/assets in folder

eslint gives syntax errors

will not write any html code in index.html file
only 1 html and has 2 tags <div id="root"></div>
<script type="module" src="/src/main.jsx"></srript>

readme can have description for project or extra information for team.

vite config has info about vite configuration.

devdependencies are those libraries and packages that are necessary during developemnt only and are not required after deployment

dependencies - these are major pkgs that are necessay in dev and pro

developed by jordan walke in 2011
meta aadopted react on messenger(2011), insta(2012), open sourced it in (2013)

npm is worlds largest package registery/repository

# working of React

```
index.html  <=  Main.jsx  <=  App.jsx  <=  demo.jsx  <=  demo1.jsx
                                                     <=  demo2.jsx
```

`main.js` has `createRoot()` which is responsible to make the foundation for the virtual DOM tree structure
`createRoot()` was introduced in react 18 replacing old `ReactDOM.render()`

`main.jsx` will render() `app.jsx`

`main.jsx` has render method which is resposible for `diffing algorithm`, `reconsilation`and then this code
is added to `index.html` which has id=`root`

The `render` method initiates the process, but React's `reconciler` handles the `diffing` and `reconciliation` internally

but `transpilation` is handled by build tools like Babel, not the render method

all files are imported in `main.jsx` so even if `index.css` is imported in `main.jsx` we can target elements that
are available in nested components.

main.jsx has App.jsx wrapped in `StrictMode` this helps find Double-Rendering Detection,
Detecting unexpected side effects which is done by hooks like useEffect, if not needed then we can
remove wrapper of `StrictMode` StrictMode only runs in development mode

`this is how component architecture will work`

js is to be written inside function like App but outside of its return()

# React + Vite Project Structure Guide

## 📁 Project Structure

### Key Directories

-   **node_modules/** - Contains all project dependencies and their nested dependencies
    -   Examples: babel, eslint, etc.
-   **src/assets/** - Recommended location for static assets (preferred over public folder)
-   **public/** - Only for files that need to be served as-is

### Important Files

-   **index.html** - Entry point HTML with minimal structure
    ```html
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    ```
-   **vite.config.js** - Vite configuration settings

## 📦 Dependencies

### Development Dependencies

-   Located in `devDependencies`
-   Required only during development
-   Not included in production build

### Production Dependencies

-   Located in `dependencies`
-   Essential for both development and production
-   Included in final build

## ⚛️ React Overview

### History

-   Developed by Jordan Walke in 2011
-   Meta Implementation Timeline:
    -   2011: Messenger
    -   2012: Instagram
    -   2013: Open-sourced

## 🔄 Application Flow

```mermaid
graph LR
    A[index.html] <- B[Main.jsx] <- C[App.jsx] <- D[Components]
```

### Key Concepts

1. **Virtual DOM Foundation**

    - `createRoot()` in React 18 (replacing old `ReactDOM.render()`)
    - Handles virtual DOM tree structure

2. **Rendering Process**

    - Main.jsx renders App.jsx
    - Involves:
        - Diffing Algorithm
        - Reconciliation
        - Final DOM Updates

3. **Development Features**
    - StrictMode for:
        - Double-Rendering Detection
        - Side Effect Detection
        - Development-only features

## 🛠️ Best Practices

-   Write JavaScript logic inside component functions but outside return()
-   Use src/assets for static files
-   Utilize ESLint for syntax checking
-   Import global styles in main.jsx

## 🔗 NPM

-   World's largest package registry
-   Central repository for JavaScript packages

---

_Note: This project uses Vite as the build tool for faster development experience._

For more details, check the [React Documentation](https://react.dev/) and [Vite Documentation](https://vitejs.dev/).
