/// <reference types="Cypress" />

const MAIL_ADMIN = 'bouba+admin@wiza.com';
const PASSWORD = 'admin';

const PRODUCT_NAME = 'Wakanda';
const PRODUCT_STOCK = '100';


context('Navigation', () => {
  
    it('Go to our sandbox home page', () => {
      
      cy.visit('https://back.hnoss.sandbox.wizaplace.com/admin.php', {
        
        })
    })

    it('Login to the sandbox', () => {
        cy.contains('Email').click().type(MAIL_ADMIN)
        cy.contains('Mot de passe').click().type(PASSWORD)
        cy.contains('Me connecter').click()
    
         //Click straight to Marchands in the dropdown menu
     // cy.get('#header_subnav > ul > li.dropdown.active > a > b').find('li')
       cy.get('ul.nav.hover-show.nav-pills li.products a').click({ force:true })
    
       //Click the + button in order to start to create a new vendor
       cy.get('i.icon-plus').first().click()
   
    //Product informations
        cy.get('input#product_data_status_0').click()
      //  cy.get('#opener_picker_categories_list_2047252834').click() select a category ?
      //cy.get('input#product_data_product.input-large').click().type(PRODUCT_NAME)
       cy.get('[id="product_data_product"]').click().type(PRODUCT_NAME)
      //  cy.contains('Nom').click().type(PRODUCT_NAME)
      cy.get('[id="product_data_tax_ids_1"]').click()
      cy.get('[id="product_data_w_condition_0"]').click()
      cy.get('[id="product_data_amount"]').click().type(PRODUCT_STOCK)
      cy.get('[id="product_data_infinite_stock"]').click()
      //cy.get('[id="product_data_geoloc_label"]').click().type('Nice')
      //cy.get('[id="product_data_is_subscription"]').click()
      cy.get('[id="product_data_seo_name"]').click().type(PRODUCT_NAME)
      
      //Select he + button category 
      //cy.get('i.icon-plus').click()
      cy.scrollTo('top')
      //Image
      cy.get('li#images.cm-js').click()
      //Select an image
      //cy.get('input#local_608714aa73b5ced0b2509ebc3c42edd0.file').click()
      //cy.get('[name="local_608714aa73b5ced0b2509ebc3c42edd0"]').click({ force:true })

      //cy.get('[name="file_product_main_image_detailed[0]"]').first().click({ force:true })
      //  .type('input[https://s3-eu-west-1.amazonaws.com/wizaplace-rind/elfinder/wakanda.jpg]')
      //  .contains('OK').click()

        
    })  
      
      
})

  