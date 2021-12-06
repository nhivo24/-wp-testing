describe("Login", () =>{
it("Should login username with passwword", ()=>{
    cy.visit("https://noithatquangmai.com/wp-login.php");
    cy.get('#user_login').type("nhipnv");
    cy.get('#user_pass').type("nhi");
    cy.get('#wp-submit').click();
    cy.get('.wrap > h1').should("have.text","Bảng tin");
});
})
