# User Profiles Basic

This is a simple React application that fetches and displays user profiles.

## Features

*   Fetches user data from a public API (`https://jsonplaceholder.typicode.com/users`).
*   Displays a loading indicator while data is being fetched.
*   Handles and displays errors if the data fetching fails.
*   Displays user profiles in a card layout.
*   Each user card includes:
    *   An avatar from [DiceBear](https://www.dicebear.com/).
    *   User's name, username, email, phone, company, and address.
    *   A link to the user's website.
*   A simple navigation bar.

## Technologies Used

*   **Frontend:**
    *   React
    *   HTML5 & CSS3
*   **Styling:**
    *   Bootstrap 5
*   **Avatar Generation:**
    *   DiceBear
*   **Development Tools:**
    *   Create React App
    *   `react-scripts` (for building, starting, and testing)
    *   `@testing-library/react` for testing

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/user-profiles-basic.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the app in the development mode:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.