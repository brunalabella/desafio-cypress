const SIGNUP_BUTTON = 'a[href="/login"]'

class HomePage {

    acessarAutomationExercise() {
        cy.visit('/')
    }

    realizarNovoCadastro() {
        cy.get(SIGNUP_BUTTON).click()
    }

}

export default new HomePage()