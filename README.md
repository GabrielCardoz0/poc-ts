===========

para criar um novo contato:
POST: /contacts

Body: {
  "name":"gabriel",
  "number":99999999999,
  "cep":"99999999"
}

===========

para pegar lista de contatos:

GET: / contacts

===========

para pegar o númeto total de contatos:

GET: /totalcontacts

============

para deletar um contato existente:

DELETE: /contacts/delete/:id

============

para atualizar um contato existente:

PUT: /contacts/update/:id

Body: {
  "name":"gabriel",
  "number":99999999999,
  "cep":"99999999"
}
