import { mount } from '@cypress/react';
import Quiz from '../../src/components/Quiz';  // Adjust the path !!!!!!

describe('Quiz Component', () => {
  it('renders the quiz correctly', () => {
    mount(<Quiz />);
    cy.get('.question').should('be.visible');
    cy.get('.answers').children().should('have.length', 4);  // Assume there are 4 answers per question
  });
});
