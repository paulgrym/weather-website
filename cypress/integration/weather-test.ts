describe("weather form", () => {
  it("loads header and form elements successfully", () => {
    // given
    websiteIsOpened();

    // when

    // then
    displaysHeader("Pogoda na dziś");
    displaysLatitudeInput();
    displaysLongitudeInput();
    displaysRadioButtons();
    displaysButton("Pokaż pogodę!");
  });

  it("returns Openweathermap weather successfully", () => {
    // given
    websiteIsOpened();

    // when
    cy.get("[data-testid=latitudeInput]").type("52");
    cy.get("[data-testid=longitudeInput]").type("22");
    cy.get("[data-testid=API1Input]").check();
    cy.intercept({
      method: 'GET',
      url: '*',
    }).as('getData')
    cy.get("[data-testid=submit]").click();
    cy.wait('@getData')

    // then

    cy.get("[data-testid=resultLink]").should("be.visible").should("contain.text", "Openweathermap");
  });

  it("returns Weatherbit weather successfully", () => {
    // given
    websiteIsOpened();

    // when
    cy.get("[data-testid=latitudeInput]").type("52");
    cy.get("[data-testid=longitudeInput]").type("22");
    cy.get("[data-testid=API2Input]").check();
    cy.intercept({
      method: 'GET',
      url: '*',
    }).as('getData')
    cy.get("[data-testid=submit]").click();
    cy.wait('@getData')

    // then

    cy.get("[data-testid=resultLink]").should("be.visible").should("contain.text", "Weatherbit");
  });
});

function displaysHeader(result: string) {
  cy.get("[data-testid=header]").should("be.visible").contains(result);
}

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function displaysLatitudeInput() {
  cy.get("[data-testid=latitudeInput]").should("be.visible");
}

function displaysLongitudeInput() {
  cy.get("[data-testid=longitudeInput]").should("be.visible");
}

function displaysRadioButtons() {
  cy.get("[data-testid=radioButtonsList]").should("be.visible").within(() => {
    cy.get("li").should("have.length", 2);
    cy.get("li").first().contains("openweathermap.org");
    cy.get("li").last().contains("weatherbit.io");
  })
}

function displaysButton(result: string) {
  cy.get("[data-testid=submit]").should("be.visible").contains(result);
}