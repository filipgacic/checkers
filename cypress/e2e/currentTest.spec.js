describe('yo', () => {
    it('checkers fuckery,', () => {
        cy.visit('/')

        //GET RID OF ACCEPT MODUS
        cy.contains('button', 'AGREE').then(button => {
            cy.wrap(button).should('exist')
            cy.wrap(button).click({ force: true })
        })

        cy.get('[name="space42"]').click()
        cy.get('[name="space53"]').click()

        cy.get('.line').eq(3).within(() => {
            return cy.get('[src="me1.gif"]').should('exist')
        })

        cy.get('[name="space53"]').click()
        cy.get('[name="space64"]').click()
        cy.get('[name="space44"]').click()

        cy.get('.line').eq(4).find('[src="me1.gif"], [src="	https://www.gamesforthebrain.com/game/checkers/me1.gif"]').should('be.visible')

        // cy.get('.line').eq(4).within(() => {
        //     return cy.get('[src="me1.gif"], [src="	https://www.gamesforthebrain.com/game/checkers/me1.gif"]').should('be.visible')
        // })

        cy.get('.line').eq(3).find('[src="you1.gif"]').should('not.exist')
    })

    it.only('a', () => {
        cy.visit('https://kairos-ui.herokuapp.com/login')
    })
})
