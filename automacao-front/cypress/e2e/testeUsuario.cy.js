beforeEach(() => {
  cy.visit('/')
})

context('VALIDAR: Página de cadastro', () => {

  it('Cenário: Cadastro com sucesso.', () => {
    cy.visit('/')
    cy.cadastrarUsuarioValido()

    cy.get('[data-testid="alerta"]')
      .should('be.visible')
      .and('have.text', 'Cadastro realizado com sucesso!')

  })

  it('Cenário: E-mail diferente.', () => {
    cy.visit('/')
    cy.usuarioEmailDiferente()

    cy.get('[data-testid="alerta"]')
      .should('be.visible')
      .and('have.text', 'Os e-mails não coincidem')

  })

  it('Cenário: Senha fraca.', () => {
    cy.visit('/')
    cy.usuarioSenhaFraca()

    cy.get('[data-testid="forca-senha"]')
      .should('be.visible')
      .and('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número')

      cy.get('[data-testid="erro-senha"]')
        .should('have.text', 'A senha não atende aos requisitos mínimos')

  })

})

context('VALIDAR: Campos obrigatórios', () => {

beforeEach(() => {
  cy.interagirComCampos()
})

  it('Cenário: Campo NOME obrigatório', () => {
    cy.get('[data-testid="erro-nome"]')
      .should('have.text', 'Este campo é obrigatório')
  })

  it('Cenário: Campo EMAIL obrigatório', () => {
    cy.get('[data-testid="erro-email"]')
      .should('have.text', 'Este campo é obrigatório')
  })

  it('Cenário: Campo CONFIRMAÇÃO DE EMAIL obrigatório', () => {
    cy.get('[data-testid="erro-confirmacao-email"]')
      .should('have.text', 'Este campo é obrigatório')
  })

  it('Cenário: Campo SENHA obrigatório', () => {
    cy.get('[data-testid="erro-senha"]')
      .should('have.text', 'A senha não atende aos requisitos mínimos')
  })

  it('Cenário: Campo CONFIRMAÇÃO DE SENHA obrigatório', () => {
    cy.get('[data-testid="erro-confirmacao-senha"]')
      .should('have.text', 'Este campo é obrigatório')
  })

})