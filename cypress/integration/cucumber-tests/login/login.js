import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const MAIL_ADMIN = 'bouba+admin@wiza.com';
const PASSWORD = 'admin';

const VENDOR_NAME = 'MAC';
const STATUS = 'SaaS';

const FIRSTNAME = 'Cecil';
const LASTNAME = 'ALESSANDRINI';
const SIRET = '362 251 879 56434';
const TVA = '99985123459';
const CAPITAL = '20 000';
const RCS = '52';
const IBAN = 'FR0914508000409389586668E48';
const BIC = 'AGFBFRCC';
const NAF_CODE = '3214A';

const MAIL_VENDOR = 'bouba+march@wizacha.com';
const PHONE = '0123546789';
const SOCIETY = 'Wizaplace';
const ADDRESS = '2 quai du commerce';
const ZIPCODE = '69009';
const TOWN = 'Lyon';

Given('I am in the Wizaplace login page',()=>{
 
    cy.visit("https://back.rind.sandbox.wizaplace.com/admin.php");
 
})
 
When('I enter valid credentials',()=>{
 
    cy.contains('Email').click().type(MAIL_ADMIN)
    cy.contains('Mot de passe').click().type(PASSWORD)
    cy.contains('Me connecter').click() 
})
 
Then('I should be able to create a valid merchant',()=>{
 
    //cy.get('.bm-burger-button > button').click();
    //cy.get('#logout_sidebar_link').click(); 

    cy.get('ul.nav.hover-show.nav-pills li.vendors a').click({ force:true })

    //Click the + button in order to start to create a new vendor
    cy.get('i.icon-plus').click()

    //Fill up our vendor informations
    cy.contains('Nom du Marchand').click().type(VENDOR_NAME)
    cy.contains('Statut légal').click().type(STATUS)
    cy.contains('Prénom du représentant légal').click().type(FIRSTNAME)
    cy.contains('Nom du représentant légal').click().type(LASTNAME)
    cy.contains('Numéro SIRET').click().type(SIRET)
    cy.contains('Numéro de TVA').click().type(TVA)
    cy.contains('Capital').click().type(CAPITAL)
    cy.contains('RCS').click().type(RCS)
    cy.contains('IBAN').click().type(IBAN)
    cy.contains('BIC / SWIFT').click().type(BIC)
    //cy.contains('Code Naf').click().type(NAF_CODE)

    //Contact informations
    cy.contains('Email').click().type(MAIL_VENDOR)
    cy.contains('Tél').click().type(PHONE)


    //Address for the products return just in case
    cy.get('textarea#elm_w_rma_address.input-large').click().type(ADDRESS)
    cy.get('input#elm_w_rma_zipcode').click().type(ZIPCODE)
    cy.get('input#elm_w_rma_city.input-large').click().type(TOWN)

    //Address
    cy.get('textarea#elm_company_address.input-large').click().type(ADDRESS)
    cy.get('input#elm_company_zipcode').click().type(ZIPCODE)
    cy.get('input#elm_company_city.input-large').click().type(ADDRESS)


    cy.scrollTo('top')

    //Select a delivery method
    cy.get('#shipping_methods').click({ force:true })
    cy.get('[name="company_data[shippings][]"]').first().check({ force:true }).should('be.checked')
    //cy.scrollTo('topRight')
    cy.get('li#legal_documents.cm-js').click()

    //How to click on the local button
    //cy.contains('Local').first().click({ force:true })
    cy.get('[id="local_f724fd21a9f26ef4f4428c43c9118419"]').click()
    //.upload(/Users/siddy/Downloads/version.png)
    //cy.get('[id="url_f724fd21a9f26ef4f4428c43c9118419"]').click()
  })
 
