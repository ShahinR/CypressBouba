<reference types="Cypress" />
context('Navigation', () => {
  
    it('Go to the sandbox home page', () => {

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
  }); 
})
})