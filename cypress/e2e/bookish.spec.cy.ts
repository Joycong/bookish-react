/// <reference types="cypress" />

// cypress/e2e/bookish.spec.cy.ts

describe('Bookish application', () => {
  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/'); // 로컬 서버로 접속
    cy.get('div[data-test="book-list"').should('exist');
    cy.get('div.book-item').should((books) => { // 책 리스트가 있고
      expect(books).to.have.length(2); // 책이 2개 보여야 한다
      const titles = [...books].map(x => x.querySelector('h2')!.innerHTML);
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
});



