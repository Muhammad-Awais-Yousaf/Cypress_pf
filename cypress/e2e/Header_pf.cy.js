describe('PF Header Tests', function() {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("https://pf.com.pk/")
  })


  // Header PF Logo click ad redirect the homepage
  it('Header PF logo is clicked and redirect the homepage', function() {
    cy.get('header img').first().click({ force: true })
    cy.url().should('eq', 'https://pf.com.pk/')
  })



  //About Us button in header
  it('About Us Button in header is clicked and open the correct page', function() {
    cy.get('header').contains('About Us').click()
    cy.url().should('include', '/about')
  })



  //Career Button in header
  it('Careers Button in header is clicked and open the correct page', function() {
    cy.get('header').contains('Careers').click()
    cy.url().should('include', '/career')
  })



  //Career Dropdown Option Open Positions
  it('Careers Dropdown option (open position) in header is clicked and open the correct page', function() {
      cy.get('header').contains('Careers').click()
      cy.get('ul.sub-menu').should('be.visible')
      cy.get('ul.sub-menu').contains('Open Positions').should('be.visible')
      cy.get('ul.sub-menu').contains('Open Positions').scrollIntoView().click({force: true})
      cy.url().should('include', '/apply-now')
      cy.go('back');
  })



  //Career Dropdown Option Send Resume
  it('Careers Dropdown option (Send Resume) in header is clicked and open the correct page', function() {
      cy.get('header').contains('Careers').click()
      cy.get('ul.sub-menu').should('be.visible')
      cy.get('ul.sub-menu').contains('Send Resume').should('be.visible')
      cy.get('ul.sub-menu').contains('Send Resume').scrollIntoView().click({force: true})
      cy.url().should('include', '/apply-now/#popup1')
      cy.go('back');
  })



  //Life at PF button in header
  it('Life at Pf button in header is clicked and open the correct page', function() {
    cy.get('header').contains('Life at PF').click()
    cy.url().should('include', '/life-at-pf')
  })



  //Expertise button in header
  it('Expertise button in header is clicked and open the correct page', function() {
    cy.get('header').contains('Expertise').click()
    cy.url().should('include', '/expertise')
  })



  //Resource button in header
  it('Resource button in header is clicked and open the correct page', function() {
      cy.get('header').contains('Resources').click()
      cy.url().should('include', '/#')
  })



  //Resource Dropdown Option Blogs
  it('Resource Dropdown option (Blogs) in header is clicked and open the correct page', function() {
      cy.get('header').contains('Resources').click()
      cy.get('ul.sub-menu').should('be.visible')
      cy.get('ul.sub-menu').contains('Blogs').should('be.visible')
      cy.get('ul.sub-menu').contains('Blogs').scrollIntoView().click({ force: true })
      cy.url().should('include', '/blogs')
      cy.go('back');
  })



  //Resource Dropdown Option News
  it('Resource Dropdown option (News) in header is clicked and open the correct page', function() {
      cy.get('header').contains('Resources').click()
      cy.get('ul.sub-menu').should('be.visible')
      cy.get('ul.sub-menu').contains('News').should('be.visible')
      cy.get('ul.sub-menu').contains('News').scrollIntoView().click({ force: true })
      cy.url().should('include', '/news')
      cy.get('ul.sub-menu').should('be.visible')
      cy.go('back');
  })



  //Graduate Gateway Program button in header
  it('Graduate Gateway Program button in header is clicked and open the correct page', function() {
    cy.get('header').contains('Graduate Gateway Program').click()
    cy.url().should('include', '/trainee-program')
  })



  //Apply Now button in header
  it('Apply Now button in header is clicked and open the correct page', function() {
    cy.get('header').contains('Apply Now').should('be.visible').click()
    cy.url().should('include', '/apply-now')
  })


})


