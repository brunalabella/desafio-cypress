import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

import { fakerPT_BR as faker } from '@faker-js/faker'

let response
let body

Given('que possuo os dados válidos do usuário', () => {

  body = {

    name: faker.person.fullName(),

    email: faker.internet.email(),

    password: Cypress.env('password'),

    title: faker.helpers.arrayElement([
      'Mr',
      'Mrs',
      'Miss'
    ]),

    birth_date: faker.number.int({
      min: 1,
      max: 28
    }).toString(),

    birth_month: faker.number.int({
      min: 1,
      max: 12
    }).toString(),

    birth_year: faker.number.int({
      min: 1980,
      max: 2005
    }).toString(),

    firstname: faker.person.firstName(),

    lastname: faker.person.lastName(),

    company: faker.company.name(),

    address1: faker.location.streetAddress(),

    address2: faker.location.secondaryAddress(),

    country: faker.helpers.arrayElement([
      'United States',
      'Canada',
      'India',
      'Australia'
    ]),

    zipcode: faker.location.zipCode(),

    state: faker.location.state(),

    city: faker.location.city(),

    mobile_number: faker.string.numeric(11)

  }

})

When('realizo uma requisição POST para criar usuário', () => {

  cy.request({

    method: 'POST',

    url: 'https://automationexercise.com/api/createAccount',

    form: true,

    body: body

  }).then((res) => {

    response = res

  })

})

Then('o usuário deve ser criado com sucesso', () => {

  expect(response.body)
    .to.contain('User created!')

})

Then('a API deve retornar status code 200', () => {

  expect(response.status)
    .to.eq(200)

})

Then('a resposta deve conter a mensagem {string}', (mensagem) => {

  expect(response.body)
    .to.contain(mensagem)

})

Then('a estrutura da resposta deve ser válida', () => {

  expect(response.body)
    .to.contain('responseCode')

  expect(response.body)
    .to.contain('User created!')

})