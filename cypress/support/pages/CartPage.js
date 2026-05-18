const PRODUCT_NAME = '.cart_description'
const PRICE_NAME = '.cart_price p'


class CartPage {

  // Valida se o produto existe no carrinho
  validarProdutoCarrinho(nomeProduto){

    cy.get(PRODUCT_NAME)
      .should('contain.text', nomeProduto)

  }

  // Valida o preço do produto
  validarPrecoProdutoCarrinho(preco){

    cy.get(PRICE_NAME)
      .should('contain.text', preco)

  }
}

export default new CartPage()


