describe('PF Header Tests', function() {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://pf.com.pk/');
    });



  // Verify the main header and subtext visibility and content
  it('Main header and subtext are displayed correctly', function () {
      cy.get('h2.hero_heading_one', { timeout: 20000 })
        .should('be.visible')
        .and('contain.text', 'Redefining Technology Through AI');
      cy.get('p.hero_description', { timeout: 20000 })
        .should('be.visible')
        .and('contain.text', 'Providing AI-powered solutions and services to the world’s leading businesses to redefine their objectives with automation and innovation.');
  });



    //Apply Now Button in Redefining Technology Through AI
    it('Apply Now Button in Redefining Technology Through AI work accurately', () => {
        cy.contains('a', 'Apply Now', { timeout: 10000 }).should('be.visible').and('have.attr', 'href').and('include', '/apply-now');
        cy.contains('a', 'Apply Now').click();
        cy.url().should('include', '/apply-now');
        cy.go('back');
    });



  // Animated header is visible after animation completes
  it('Animated header is visible after animation completes', function () {
      cy.get('h2.inner-small-heading', { timeout: 20000 })
        .should('be.visible')
        .and('contain.text', 'A Place That Drives Innovation');
  });



    //PF Video works accurately
    it('PF Video works accurately', () => {
        cy.get('video', { timeout: 15000 }).should('exist').and('be.visible')
          .and(($video) => {
              expect($video[0].currentSrc).to.not.be.empty;
          });
        cy.get('video').then(($video) => {
            $video[0].play();
            cy.wrap($video).should(($v) => {
                expect($v[0].paused).to.be.false;
            });
        });
    });



    //Apply Now button in Join us section
    it('Apply Now button in Join us section work  correctly', () => {
        cy.get('a.btn_applynow_center', { timeout: 10000 }).should('be.visible').and('have.attr', 'href').and('include', '/apply-now/');
        cy.get('a.btn_applynow_center').click();
        cy.url().should('include', '/apply-now');
        cy.go('back');
    });



  // Verify the About section's title and content
  it('About section displays the title and content correctly', function () {
      cy.get('.heading-global').should('be.visible');
      cy.get('.sbtitle').should('contain.text', 'About');
      cy.get('h2.inner-small-heading').should('contain.text', 'Programmers Force - Where Innovation Has No Boundaries');
  });



  // Verify tab switching functionality and content
  it('Tabs switch correctly and show appropriate content', function () {
      cy.get('.tab').should('have.length', 4).each(($tab) => {
          cy.wrap($tab).should('be.visible').click();
          cy.wrap($tab).should('have.class', 'active');
      });
  });



  // Tabs auto-scroll every 2 seconds
  it('Tabs auto-scroll every 2 seconds', function () {
      cy.wait(6000);
      cy.get('.tab.active').then(($activeTab) => {
          const initialIndex = $activeTab.index();
          cy.wait(2000).then(() => {
              cy.get('.tab.active').should(($newActiveTab) => {
                  expect($newActiveTab.index()).to.not.equal(initialIndex);
              });
          });
      });
  });



  // Workplace section displays correct titles and descriptions
  it('Workplace section displays correct titles and descriptions', function () {
      cy.get('.workplace_content .workp_content').should('have.length', 4).each(($section, index) => {
          const titles = ['Flexible Timings', 'Rewards', 'Professional Growth', 'Provident Fund'];
          cy.wrap($section).within(() => {
              cy.get('h3').should('contain.text', titles[index]);
          });
      });
  });


})