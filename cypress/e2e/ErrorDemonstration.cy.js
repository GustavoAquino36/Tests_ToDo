describe('Mostrando erro no contador, Gustavo de Aquino Arena', () => {
  const todos = ['Primeira tarefa', 'Segunda tarefa', 'Terceira tarefa']
    beforeEach(() => {
      cy.visit('https://todolist.james.am/#/');
    });
  
    it('cria e mostra erro de contagem', () => {
      todos.forEach((todo) => {
        // Cria 3 objetos na lista baseado na lista pré definida na linha 2
        cy.get('.new-todo').should('exist').type(`${todo}{enter}`);
      })

      cy.get('[for="toggle-all"]').click()

      // logica para ver se numero de itens ativo é maior que zero
      cy.get('.todo-count strong').invoke('text')
      .then((text) => {
        const numero = parseInt(text.trim());
        if (numero < 0) {
          throw new Error("Erro: o contador não pode ser um número negativo")
        }
      })   
    });
})