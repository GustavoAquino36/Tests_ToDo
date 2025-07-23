describe('criando e apagando objetos na lista ToDo, Gustavo de Aquino Arena', () => {
  const todos = ['Primeira tarefa', 'Segunda tarefa', 'Terceira tarefa']
    beforeEach(() => {
      cy.visit('https://todolist.james.am/#/');
    });
  
    it('cria e apaga tarefas', () => {
      todos.forEach((todo) => {
        // Cria 3 objetos na lista baseado na lista pré definida na linha 2
        cy.get('.new-todo').should('exist').type(`${todo}{enter}`);

        // Verificar se oq acabei de criar está existente
        cy.contains('li', todo).should('exist')
      })
    });
})