describe(' Funcionalidade cadastro sem informa a senha', () => {
    it(' Validar cadastro sem informar senha', () => {

        //Acessar a pagina
        cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
      
        //Preencher os campos
        
      
        cy.get(':nth-child(4) > td > input').type('senha')
        cy.get(':nth-child(6) > td > input').type('Jose')
      
        //Clicar no botão enviar
        cy.get('td > .btn').click()
      
        // Verifique se o campo de entrada ainda esta marcado como obrigatorio.
        cy.get('input[name="form_senha"]').should('have.attr','required');
      
       
           }) 
        
      })
    
