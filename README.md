# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### How long you spent on the assignment.
I've spent 3 hours on this.

### What you like about your implementation.

- It made me think about how I would solve problems such as creating a calendar board and manipulating its environment to fit the dates, displaying each event in its place.

- The small details, both visual and functional, such as storing events within an API context and also loading them from localStorage in case of browser refresh.
### What you would change if you were going to do it again.
- I would add end-to-end tests.
- I would improve the drag and drop functionality.
- I would include more features like event resizing.

### How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
- My inspiration was Google Calendar but mixed it with my own visual touch. For implementation, I didn't use references.

### How you would test this if you had more time.
- First, I would create unit tests for each component:
   - I would test Events to ensure the component reacts correctly, such as Clicks for text editing, etc.
   - I would test accessibility to ensure it provides good keyboard navigation using Tab and includes necessary ARIA messages.

- Then, I would create end-to-end tests to automate user interaction, setting up test scenarios that users would face.


### NOTE
The project structure followed Atomic Design.

- *Atoms*: Simple and small components.

- *Molecules*: Components that use Atoms and are a bit more complex. These may use Atoms.

- *Organisms*: More complex components resembling features of the application, these may use Molecules and Atoms.

- *Pages*: Application pages that utilize Atoms, Molecules, Organisms, Providers, etc.


- The Data file it's on `src/lib/data.ts` file