describe('Shopping Cart Test Quantity Update', ()=>{
    
    it('Verify the total amount after the quantity updated', ()=>{
       
        cy.visit("https://noithatquangmai.com/")  //Launch Browser & Open Url

        cy.get('#woocommerce-product-search-field-0').type("Đệm mát cao cấp Cool Mattress") //Enter Text in Search box
        
        cy.get(".ux-search-submit[type=submit]").click() //Click on Search button

        cy.get(".single_add_to_cart_button[value='694']").click() //Click on ADD TO CART

        cy.get(".icon-shopping-basket").click() //Click on Shopping Cart Link at the top of the page

        cy.get(".price-wrapper > p > span.woocommerce-Price-amount").contains("1.224.000") //Verify the unit price 1.224.000đ

        cy.get(".price-wrapper").should('contain', '1.224.000')
        
        cy.get("#quantity_61aaa7aec16fd").clear().type('2')//Enter Quantity 2
        
        cy.get(".update-cart-button[name=updatecart]").click() //Update shopping cart

        cy.get(".value-summary > strong").contains('2.448.000') //Verify Total  $2.448.000
        
        cy.get(".value-summary > strong")
        .should(($total)=>{
        expect($total).to.contain('2.448.000')
            
          })
    })
})
