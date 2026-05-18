#utf-8
#language: pt

Funcionalidade: Criar usuário via API
  Cenario: Criar usuário com sucesso
    Dado que possuo os dados válidos do usuário
    Quando realizo uma requisição POST para criar usuário
    Então o usuário deve ser criado com sucesso
    E a API deve retornar status code 200
    E a resposta deve conter a mensagem "User created!"
    E a estrutura da resposta deve ser válida