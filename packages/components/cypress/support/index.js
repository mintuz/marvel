import "@testing-library/cypress/add-commands";
import "cypress-react-unit-test";

// Bug with cypress-react-unit-test for the time being,
// this makes it so the tests use the same version of ReactDOM.
Cypress.on("window:load", win => {
  win.ReactDOM = window.ReactDOM;
});
