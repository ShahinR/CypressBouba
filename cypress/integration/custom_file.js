/// <reference types="Cypress" />

const MAIL_ADMIN = 'bouba+admin@wiza.com';
const PASSWORD = 'admin';

const MAIL_CUSTOM = 'patricia+client@wizacha.com';
const FIRSTNAME = 'Boubacar';
const LASTNAME = 'DIALLO';
const PHONE = '0532164987';
const SOCIETY = 'WizaCustom';
const ADDRESS = '24 rue de la gare';
const ZIPCODE = '69009';
const TOWN = 'Lyon';
const JOB_TITLE = 'Sales manager';
const LEGAL_ID = '732 829 320 00074';
const INTRA_VAT = 'X1234567890';
const EXT_ID = '32c9771c-9fbb-49a3-a9d1-b95f0d660ab9';
const COMMENT = 'Confirmed client.';


context('Navigation', () => {
  
    it('Go to our sandbox home page', () => {
      
      cy.visit('https://back.rind.sandbox.wizaplace.com/admin.php', {
        
        })
    })

    it('Login to the sandbox', () => {
        cy.contains('Email').click().type(MAIL_ADMIN)
        cy.contains('Mot de passe').click().type(PASSWORD)
        cy.contains('Me connecter').click()
    
         //Click straight to Marchands in the dropdown menu
     // cy.get('#header_subnav > ul > li.dropdown.active > a > b').find('li')
       cy.get('ul.nav.hover-show.nav-pills li.customers a').click({ force:true })
    
       //Click the + button in order to start to create a new vendor
      //cy.get('i.icon-plus').click()
       cy.get('i.icon-plus').first().click()
      //cy.get('i.icon-plus').last().click({ force:true})
   
    //Account informations
        cy.contains('Email').click().type(MAIL_CUSTOM)
        cy.contains('Mot de passe').click().type(PASSWORD)
        cy.contains('Confirmer le mot de passe').click().type(PASSWORD)

    //Contact informations
        cy.get('input#elm_6.input-large').click().type(FIRSTNAME)
    //cy.get('Prénom').type('SCHWAR')
        cy.get('input#elm_7.input-large').click().type(LASTNAME)
        cy.get('input#elm_9.input-large').click().type(PHONE)

    //Make a condition "if" the custom is whether professionnal or not
        cy.get('input#elm_45').click()
        cy.get('input#elm_8.input-large').click().type(SOCIETY)
        cy.get('input#elm_47.input-large').click().type(JOB_TITLE)
        cy.get('input#elm_49.input-large').click().type(LEGAL_ID)
        cy.get('input#elm_46.input-large').click().type(INTRA_VAT)
        cy.get('input#elm_44.input-large').click().type(EXT_ID)
        cy.get('textarea#elm_48.input-large').click().type(COMMENT)

    //Facturation address 
        cy.get('input#elm_14.input-large').click().type(FIRSTNAME)
        cy.get('input#elm_16.input-large').click().type(LASTNAME)
        cy.get('input#elm_39.input-large').click().type(SOCIETY)
        cy.get('input#elm_30.input-large').click().type(PHONE)
        cy.get('input#elm_18.input-large').click().type(ADDRESS)
        cy.get('input#elm_28.input-large').click().type(ZIPCODE)
        cy.get('input#elm_22.input-large').click().type(TOWN)

        //cy.get('a.btn.btn-primary.cm-submit.dropdown-toggle').click()
        //cy.get('a.btn.btn-primary.cm-submit.dropdown-toggle').scrollIntoView()
        
    })  
      
      
})

  