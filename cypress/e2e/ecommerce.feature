#utf-8
#language: pt

Funcionalidade: Fluxo E-commerce

  Cenario: Cadastro de Usuario e compra de produto
    Dado que acesso o site Automation Exercise
    Quando realizo um novo cadastro
   Entao o cadastro deve ser realizado com sucesso
    Quando localizo o produto Men Tshirt
    E adiciono o produto ao carrinho
    Entao o produto deve ser exibido corretamente no carrinho