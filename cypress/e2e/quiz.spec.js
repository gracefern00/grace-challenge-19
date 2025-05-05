describe('End-to-End Quiz Flow', () => {
  it('allows a user to complete the quiz', () => {
    cy.visit('/quiz'); // Replace with quiz URL
    cy.get('.start-button').click(); // Start the quiz
    cy.get('.question').should('be.visible'); // Check if the question is visible

    // Answer the first question
    cy.get('.answer-button').first().click();
    // Answer the second question
    cy.get('.answer-button').eq(1).click();

    // Submit the quiz
    cy.get('.submit-button').click();
    cy.get('.score').should('be.visible').and('contain', 'Score:');
  });
});
