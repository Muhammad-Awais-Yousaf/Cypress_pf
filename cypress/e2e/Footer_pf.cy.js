describe('PF Header Tests', function() {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("https://pf.com.pk/")
  })


  // Footer PF Logo click and redirect the homepage
  it('Footer PF logo is clicked and redirect the homepage', function () {
    cy.get('footer img').first().click({force: true})
    cy.url().should('eq', 'https://pf.com.pk/')
  })

  //Life At Programmers force link in footer
  it('Life At Programmers force link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Life At Programmers force').click({ force: true })
    cy.url().should('include', '/life-at-pf')
  })


  //Our Teammates link in footer
  it('Our Teammates link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Our Teammates').click({ force: true })
    cy.url().should('include', '/about-us')
  })



  //In House Privacy Policy link in footer
  it('In House Privacy Policy link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('In House Privacy Policy').click({ force: true })
    cy.url().should('include', '/privacypolicy')
  })



  //ISO Certified link in footer
  it('ISO Certified link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('ISO Certified').click({ force: true })
    cy.url().should('include', '/iso_certified')
  })



  //Career link in footer
  it('Career link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Career').click({ force: true })
  })



  //Job Positions link in footer
  it('Job Positions link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Job Positions').click({ force: true })
    cy.url().should('include', '/apply-now')
  })


  //Send Resume link in footer
  it('Send Resume link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Send Resume').click({ force: true })
    cy.url().should('include', '/apply-now/#popup1')
  })



  //Track your Application link in footer
  it('Track your Application link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Track your Application').click({ force: true })
    cy.url().should('include', '/apply-now')
  })



  //Ransomware link in footer
  it('Ransomware link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Ransomware').click({ force: true })
    cy.url().should('include', '/blogs')
  })



  //FinTech link in footer
  it('FinTech link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('FinTech').click({ force: true })
    cy.url().should('include', '/social-impact-of-fintech-solution-in-pakistan')
  })



  //Life-changing link in footer
  it('Life-changing link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Life-changing').click({ force: true })
    cy.url().should('include', '/is-it-a-life-changing-industry')
  })



  //AI Career link in footer
  it('AI Career link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('AI Career').click({ force: true })
    cy.url().should('include', '/ai-career-paths-and-future-market-trends-in-ai')
  })



  //PF Email link in footer
  it('PF Email link  work accurately', function() {
    cy.get('footer').contains('hr@pf.com.pk').should('have.attr', 'href', 'mailto:hr@pf.com.pk');
  })


  //PF phone number link in footer
  it('PF phone number link work accurately', function() {
    cy.get('footer').contains('+92 301-588-8444').should('be.visible');
  })



  //Apply Now link in footer
  it('Apply Now link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Apply Now').should('be.visible').click();
    cy.url().should('include', '/apply-now');
  })



  //Social apps
  it('Social media icons showing', function () {
    cy.get('footer').find('a[href*="facebook.com"]');
    cy.get('footer').find('a[href*="twitter.com"]');
    cy.get('footer').find('a[href*="linkedin.com"]');
    cy.get('footer').find('a[href*="instagram.com"]');
    cy.get('footer').find('a[href*="youtube.com"]');
  })



  //Privacy Policy link in footer
  it('Privacy Policy link in footer is clicked and open the correct page', function() {
    cy.get('footer').contains('Privacy Policy').should('be.visible').click();
    cy.url().should('include', '/privacypolicy');
  })



})