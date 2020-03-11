import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const MAIL_ADMIN = 'bouba+admin@wiza.com';
const PASSWORD = 'admin';

Given('I am in the demo site',()=>{
 
    cy.visit("https://back.hnoss.sandbox.wizaplace.com/admin.php");
 
})
 
When('I enter valid credentials',()=>{
 
    cy.contains('Email').click().type(MAIL_ADMIN)
    cy.contains('Mot de passe').click().type(PASSWORD)
    cy.contains('Me connecter').click() 
})
 
Then('I should be able to login successfully',()=>{
 
    //cy.get('.bm-burger-button > button').click();
    //cy.get('#logout_sidebar_link').click(); 

    cy.get('ul.nav.hover-show.nav-pills li.vendors a').click({ force:true })

    //Click the + button in order to start to create a new vendor
    cy.get('i.icon-plus').click()
 
})