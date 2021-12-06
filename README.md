# WebWorker example

This repository is a minimal reproduction of how defining the worker URL as a separate variable breaks the worker initialization. The code is based off the `with-web-worker` example provided by Next.js, with modifications done only in the manner the worker is created.

There are only three little files to look at:

- `utils/pi.js`: contains a single function to calculate an approximation of pi
- `worker.js`: contains a web worker that processes the `pi` function above
- `pages/index.js`: a React component that initializes the worker. This is the main file of concern.

To check this out:

1. Launch the development server with the below instructions
2. In your code editor, open the file `pages/index.ts`
3. Look at the lines 8-12. Toggle the cases to see the effect.

- In case I, the url is defined as a separate variable and then passed in the Worker initialization. Gives the error `SyntaxError: import declarations may only appear at top level of a module`.
- In case II, the url is created directly inside the Worker initialization's arguments. Works fine.

## How to run?

1. Install dependencies: `yarn`
2. Run the development server: `yarn dev`
