/// <reference types="cypress" />

import * as cypress from "cypress"

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
export { }
declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>
            drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>


        }
    }

    // } Cypress.Commands.add('login', () => {
    //     cy.visit('localhost:4200')
    //     cy.contains('a', 'Sign in').click()
    //     cy.get('[placeholder="Email"]').type('kden123@gmail.com')
    //     cy.get('[placeholder="Password"]').type('kden123')
    //     cy.contains('button', 'Sign in').click()
}
