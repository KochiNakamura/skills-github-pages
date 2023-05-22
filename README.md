# visma e-conomic hiring task

### User stories:

1. As a freelancer I want to be able to register how I spend time on my _projects_, so that I can provide my _customers_ with an overview of my work.
2. As a freelancer I want to be able to get an _overview of my time registrations per project_, so that I can create correct invoices for my customers.
3. As a freelancer I want to be able to _sort my projects by their deadline_, so that I can prioritise my work.

Individual time registrations should be 30 minutes or longer, and once a project is complete it can no longer receive new registrations. You do not need to create an actual invoice.

## Considerations

- Works, obviously
- Contains readable, bug free code
- Is appropriately covered by tests, in the frontend and backend (where required)
- Follows sensible structured design patterns and thought proceses
- Validates user input and contains test coverage for these use cases, at least in the backend
- The front-end is typed using typescript
- Consider how your application might scale as it grows in use, and in number of developers working on it
- Summarise any significant architectural decisions you take, to discuss in the presentation

## Development

1. Install dependencies - `npm install`
2. Run project - `npm start`
3. Go to `http://localhost:3000` to see the app

## Stack

1. React ❤️ Hooks ❤️ Context Api for state management
2. Styled components
3. TypeScript
4. React testing library for testing components

## Summary

- Since the app is simple, I have used React hooks + Context API combination to manage the state.
- Styled components makes it CSS scoped and declarative.
- Different part of app are seperated into different folders and files to make the app more modular and structured.
- LocalStorage is used to persist state.
- Common/shared components or files are separated so that they can be used by other components.
- Everything is typed as per the tsconfig.json given as starting point.
- Native HTML elements are used over libraries, as the need of the project was already met and also to keep things simple in time constraints.
- For tests, I have tested reducer, utils components and a UI component that can showcase how all the other UI elements can be tested as well.
- For showing tests for UI components, I have tested ProjectSort component, which needs context values and also affects order of projects in the other component. I have choosen this component to show how I can test a normal component, a context bound component, a global hook using component, a component having form fields(select in this component's case), and a component that changes the global context state.
- Fragile, logical and important part of apps are only tested, due to time constraints.

## Improvements that can be done

1. Add pagination when the no of projects is large.
2. Sorting can also be optimised by only sorting the projects that are being displayed.
3. By deep debugging the code and using useCallback and useMemo, we can for sure avoid some rerenders to make app more optimised. The current app worked smoothly and I have tried to avoid extra rerenders but I didn't debug the app thoroughly as I didn't have much time.
4. The ADD_PROJECT modal only gives one error/warning message in the app, but I can make sure that it renders an exact error/warning message if I had more time. The purpose of showing the error message was to let you now that I am aware of the feedback that needs to be given to user when a form-like submission is happened.
5. By adding some more typescript rules, I could have typed our app more strongly.
6. Since the app has a lot to do with date and time fields, proper testing of date and their validation is very important. I have tried to make sure that is done but yes with more time I can make the validation/testing better.
7. Proper datetime picker can be used to make the time selection and deadline selection better UX and UI wise. Since the focus of the challenge is to see the architecture of app, that's why I haven't tried to use very fancy libraries for time and date picking.
8. Minimum deadline is 1 day just for simplicity sake, but this can be improved as per requirements.
