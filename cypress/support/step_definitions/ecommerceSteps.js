import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'

Given('que acesso o site Automation Exercise', () => {
    HomePage.acessarAutomationExercise()
})

When('realizo um novo cadastro', () => {
    HomePage.realizarNovoCadastro()
    SignupPage.preencherFormularioCompleto()
})

Then('o cadastro deve ser realizado com sucesso', () => {
    SignupPage.validarCadastroComSucesso()
})

When('localizo o produto Men Tshirt', () => {
    ProductPage.acessarProduto()
    ProductPage.visualizarProduto()
    ProductPage.validarDetalheProduto()
})

When('adiciono o produto ao carrinho', () => {
    ProductPage.adicionarProdutoCarrinho()
})

Then('o produto deve ser exibido corretamente no carrinho', () => {
    CartPage.validarProdutoCarrinho('Men Tshirt')
    CartPage.validarPrecoProdutoCarrinho('Rs. 400')
})