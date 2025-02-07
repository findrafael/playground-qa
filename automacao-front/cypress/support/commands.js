//COMMANDS: USUARIOS

Cypress.Commands.add('cadastrarUsuarioValido', () => {
    cy.get('[data-testid="input-nome"]').type('John Doe')

    cy.get('[data-testid="input-email"]').type("email@email.com")
    cy.get('[data-testid="input-confirmacao-email"]').type("email@email.com")

    cy.get('[data-testid="input-senha"]').type("Passw.01")
    cy.get('[data-testid="input-confirmacao-senha"]').type("Passw.01")

    cy.get('[data-testid="botao-cadastrar"]').click()
})

Cypress.Commands.add('usuarioEmailDiferente', () => {
    cy.get('[data-testid="input-nome"]').type('John Doe')

    cy.get('[data-testid="input-email"]').type("email@email.com")
    cy.get('[data-testid="input-confirmacao-email"]').type("email@mail.com")

    cy.get('[data-testid="input-senha"]').type("Senha123")
    cy.get('[data-testid="input-confirmacao-senha"]').type("Senha123")

    cy.get('[data-testid="botao-cadastrar"]').click()
})

Cypress.Commands.add('usuarioSenhaFraca', () => {
    cy.get('[data-testid="input-nome"]').type('John Doe')

    cy.get('[data-testid="input-email"]').type("email@email.com")
    cy.get('[data-testid="input-confirmacao-email"]').type("email@mail.com")

    cy.get('[data-testid="input-senha"]').type("senha")
    cy.get('[data-testid="input-confirmacao-senha"]').type("senha")
})

//COMMANDS: CAMPOS

Cypress.Commands.add('interagirComCampos', () => {
    cy.get('[data-testid="input-nome"]').click()
    cy.get('[data-testid="input-email"]').click()
    cy.get('[data-testid="input-confirmacao-email"]').click()
    cy.get('[data-testid="input-senha"]').click()
    cy.get('[data-testid="input-confirmacao-senha"]').click()
    cy.get('[data-testid="input-nome"]').click()
})
