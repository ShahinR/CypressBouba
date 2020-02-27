/// <reference types="Cypress" />
//import './img'
import 'cypress-file-upload'

const MAIL_ADMIN = 'bouba+admin@wiza.com';
const PASSWORD = 'admin';

const VENDOR_NAME = 'ACME';
const STATUS = 'SaaS';

const FIRSTNAME = 'Eric';
const LASTNAME = 'ALESSANDRINI';
const SIRET = '362 521 879 56434';
const TVA = '99999123459';
const CAPITAL = '50 000';
const RCS = '25';
const IBAN = 'FR0914508000409389586668E48';
const BIC = 'AGFBFRCC';
const NAF_CODE = '3213A';

const MAIL_VENDOR = 'patricia+marchandbahrain@wizacha.com';
const PHONE = '0123456789';
const SOCIETY = 'Wizaplace';
const ADDRESS = '2 quai du commerce';
const ZIPCODE = '69009';
const TOWN = 'Lyon';

context('Navigation', () => {
  
    it('Go to the sandbox home page', () => {
      cy.visit('https://back.odin.sandbox.wizaplace.com/admin.php', {
        })
      
      })

    it('Create a new vendor', () => {
      //Login to the sandbox
      cy.contains('Email').click().type(MAIL_ADMIN)
      cy.contains('Mot de passe').click().type(PASSWORD)
      cy.contains('Me connecter').click()

      //Click straight to Marchands in the dropdown menu
     // cy.get('#header_subnav > ul > li.dropdown.active > a > b').find('li')
      cy.get('ul.nav.hover-show.nav-pills li.vendors a').click({ force:true })

      //Click the + button in order to start to create a new vendor
      cy.get('i.icon-plus').click()
      //  .contains(i.icon-plus).click()
        
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


     /* add image fixture Script in Cypress 
      Cypress.Commands.add('addImage', imagePath => {
        cy
          .fixture(imagePath)
          .as('uploadedImage')
          .get('input[type=file]')
          .then(function(el) {
            return Cypress.Blob.base64StringToBlob(this.uploadedImage, 'image/jpeg').then(blob => {
              //Used for creating a new Filelist in a round-about way
              function FileListItem(a) {
                a = [].slice.call(Array.isArray(a) ? a : arguments);
                for(var c, b = (c =a.length), d = !0; b == b && d; ) d = a[b] instanceof File;
                if(!d) throw new TypeError('expected argument to FileList is File or array of File objects');
                for(b = new ClipboardEvent('').clipboardData || new DataTransfer(); c--; ) b.items.add(a[c]);
                return b.files;
              }
              const files = [new File([blob], 'image', { type: 'image/jpeg' })];
              el[0].files = new FileListItem(files);

              cy.get(btnSelector).click();
            });
          });
      }); */
      //cy.get('#scrollable-horizontal').scrollTo('right')
      cy.scrollTo('top')

      //Select a delivery method
      cy.get('#shipping_methods').click({ force:true })
      cy.get('[name="company_data[shippings][]"]').first().check({ force:true }).should('be.checked')
      //cy.scrollTo('topRight')
      cy.get('li#legal_documents.cm-js').click()

      //How to click on the local button
      //cy.contains('Local').first().click({ force:true })
      cy.get('[id="local_f724fd21a9f26ef4f4428c43c9118419"]').click()
      //cy.get('[id="url_f724fd21a9f26ef4f4428c43c9118419"]').click()
    })
})
