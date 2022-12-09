# TDD Presentation at Mediavalet

Demo repo for the TDD presentation at Mediavalet.

Uses the Project Gutenberg api to create an application that displays a list of books in card components. Built using a TDD first development strategy.

User Story can be found at `tickets\book-list.md`

## Technologies

- React
- Mobx
- Jest
- React Testing Library
- MSW
- Mantine UI

## Testing and Running

### **Start in dev Mode**

`yarn dev`

### **Test All**

`yarn dev`

### **Test specific suite and watch**

Navigate to test suite source directory: `cd src\stores`
Run test suite: `npx jest --watch BookStore.spec.ts`
