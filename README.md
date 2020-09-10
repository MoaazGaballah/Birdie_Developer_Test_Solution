# Birdie Developer Test Solution
## Context

In this Repo, I tried to solve the test [here](https://github.com/birdiecare/birdie-test). I used a table to visualize the valuable information exist in observations(at least according to me) that had been supplied through the backend API, which accessed with database credentials provided.

## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the HTTP server (will start on port `8000`)
   ```
   npm run dev
   ```
2. Start the React app  (Run the following commands within the `front-end` folder)

    a. Install the dependencies
   ```
   npm install
   ```
   b. dive to folder at `node_modules\react-scripts-redux-ts\config`, open `webpack.config.dev.js` file and search for `test` word when find below structure 
   ```
   {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  // disable type checker - we will use it in fork plugin
                  transpileOnly: true,
                },
              },
            ],
          }
   ```
   change `test: /\.(ts|tsx)$/,` line to `test: /\.(ts|tsx|js|jsx)$/,`
   
   c. Run the application (will start on port `3000`)
   ```
   npm start
   ```
