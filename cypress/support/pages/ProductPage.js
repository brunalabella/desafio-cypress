const PRODUCTS_BUTTON = 'a[href="/products"]'
const VIEW_PRODUCT_BUTTON = 'a[href="/product_details/2"]'
const ADD_CART_BUTTON = '.btn.btn-default.cart'

const PRODUTOS_DISPONIVEIS = [
  'Blue Top',
  'Men Tshirt',
  'Sleeveless Dress',
  'Stylish Dress',
  'Winter Top',
]

class ProductPage {

  // Valida se a página de produtos foi carregada
  validarPaginaProdutos() {
    cy.url().should('include', '/products')
  }

  // Acessa a página de produtos
  acessarProduto() {
    cy.get(PRODUCTS_BUTTON).click()
  }

  // Valida se os produtos esperados existem na página
  validarProdutosDisponiveis() {

    PRODUTOS_DISPONIVEIS.forEach((produto) => {
      cy.contains(produto).should('be.visible')
    })

  }

  // Localiza um produto específico
  localizarProduto(nomeProduto) {
    cy.contains(nomeProduto).should('be.visible')
  }

  // Abre o detalhe do produto
  visualizarProduto() {
    cy.get(VIEW_PRODUCT_BUTTON).click()
  }

  // Valida página de detalhe
  validarDetalheProduto() {
    cy.url().should('include', '/product_details/')
  }

  // Adiciona produto ao carrinho e acessa o carrinho
  adicionarProdutoCarrinho() {

    cy.get(ADD_CART_BUTTON)
      .click()

    cy.contains('View Cart')
      .click()

  }

  // Fluxo completo
  fluxoCompletoProduto() {

    this.validarPaginaProdutos()

    this.validarProdutosDisponiveis()

    this.localizarProduto('Men Tshirt')

    this.visualizarProduto()

    this.validarDetalheProduto()

  }

}

export default new ProductPage()