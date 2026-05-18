import { faker } from '@faker-js/faker'

const NAME = '[data-qa="signup-name"]'
const EMAIL = '[data-qa="signup-email"]'
const SIGNUP_BUTTON = '[data-qa="signup-button"]'

const GENDER = '#id_gender2'
const PASSWORD = '#password'

const DAY_BIRTH = '#days'
const MONTH_BIRTH = '#months'
const YEAR_BIRTH = '#years'

const FIRST_NAME = '#first_name'
const LAST_NAME = '#last_name'

const COMPANY = '#company'

const ADDRESS_1 = '#address1'
const ADDRESS_2 = '#address2'

const COUNTRY = '#country'
const STATE = '#state'
const CITY = '#city'
const ZIPCODE = '#zipcode'

const MOBILE_NUMBER = '#mobile_number'

const CREATE_ACCOUNT_BUTTON = '[data-qa="create-account"]'
const CONTINUE_BUTTON = '[data-qa="continue-button"]'

class SignupPage {

  preencherNome(nome) {
    cy.get(NAME).type(nome)
  }

  preencherEmail(email) {
    cy.get(EMAIL).type(email)
  }

  clicarSignup() {
    cy.get(SIGNUP_BUTTON).click()
  }

  selecionarGenero() {
    cy.get(GENDER).check()
  }

  preencherSenha(senha) {
    cy.get(PASSWORD).type(senha)
  }

  selecionarDataNascimento() {
    cy.get(DAY_BIRTH).select('10')
    cy.get(MONTH_BIRTH).select('May')
    cy.get(YEAR_BIRTH).select('1999')
  }

  preencherPrimeiroNome(nome) {
    cy.get(FIRST_NAME).type(nome)
  }

  preencherSobrenome(sobrenome) {
    cy.get(LAST_NAME).type(sobrenome)
  }

  preencherEmpresa(empresa) {
    cy.get(COMPANY).type(empresa)
  }

  preencherEndereco1(endereco) {
    cy.get(ADDRESS_1).type(endereco)
  }

  preencherEndereco2(endereco) {
    cy.get(ADDRESS_2).type(endereco)
  }

  selecionarPais(pais) {
    cy.get(COUNTRY).select(pais)
  }

  preencherEstado(estado) {
    cy.get(STATE).type(estado)
  }

  preencherCidade(cidade) {
    cy.get(CITY).type(cidade)
  }

  preencherZipcode(cep) {
    cy.get(ZIPCODE).type(cep)
  }

  preencherCelular(numero) {
    cy.get(MOBILE_NUMBER).type(numero)
  }

  clicarCriarConta() {
    cy.get(CREATE_ACCOUNT_BUTTON).click()
  }

  clicarContinue() {
    cy.get(CONTINUE_BUTTON).click()
  }

  validarCadastroComSucesso() {
    cy.contains('Account Created!').should('be.visible')
  }

  preencherFormularioCompleto() {

    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()

    const email = faker.internet.email({
      firstName: nome,
      lastName: sobrenome
    })

    const endereco = faker.location.streetAddress()
    const cidade = faker.location.city()
    const estado = faker.location.state()
    const cep = faker.location.zipCode('#####')

    const celular = faker.string.numeric(11)

    this.preencherNome(nome)
    this.preencherEmail(email)

    this.clicarSignup()

    this.selecionarGenero()

    this.preencherSenha(Cypress.env('password'))

    this.selecionarDataNascimento()

    this.preencherPrimeiroNome(nome)
    this.preencherSobrenome(sobrenome)

    this.preencherEmpresa(Cypress.env('company'))

    this.preencherEndereco1(endereco)
    this.preencherEndereco2('Apartamento 10')

    this.selecionarPais(Cypress.env('country'))

    this.preencherEstado(estado)
    this.preencherCidade(cidade)
    this.preencherZipcode(cep)

    this.preencherCelular(celular)

    this.clicarCriarConta()
  }
}

export default new SignupPage()