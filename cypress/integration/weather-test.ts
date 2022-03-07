describe("weather form", () => {
  it("loads header and form elements successfully", () => {
    // given
    websiteIsOpened();

    // when

    // then
    displaysHeader("Pogoda na dziś");
    displaysFormElements("Pokaż pogodę!");
  });

  it("returns Openweathermap weather successfully", () => {
    // given
    websiteIsOpened();

    // when
    completeForm("[data-testid=API1Input]", 52, 22);

    // then
    isData("Openweathermap");
  });

  it("returns Weatherbit weather successfully", () => {
    // given
    websiteIsOpened();

    // when
    completeForm("[data-testid=API2Input]", 52, 22);

    // then
    isData("Weatherbit");
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
  cy.get("[data-testid=weatherContainer]").should("exist");
}

function displaysHeader(headerText: string) {
  cy.get("[data-testid=header]").should("be.visible").contains(headerText);
}

function displaysFormElements(buttonText: string) {
  cy.get("[data-testid=latitudeInput]").should("be.visible");

  cy.get("[data-testid=longitudeInput]").should("be.visible");

  cy.get("[data-testid=radioButtonsList]").should("be.visible").within(() => {
    cy.get("li").should("have.length", 2);
    cy.get("li").first().contains("openweathermap.org");
    cy.get("li").last().contains("weatherbit.io");
  });

  cy.get("[data-testid=submit]").should("be.visible").contains(buttonText);
}

function completeForm(radioInput: string, lat: number, lon: number) {
  cy.get("[data-testid=latitudeInput]").type(lat);
  cy.get("[data-testid=longitudeInput]").type(lon);
  cy.get(radioInput).check();
  cy.intercept({
    method: "GET",
    url: "*",
  }).as("getData")
  cy.get("[data-testid=submit]").click();
  cy.wait("@getData")
}

function isData(source: string) {
  cy.get("[data-testid=resultSection]").should("be.visible").within(() => {
    cy.get("p").should("have.length", 4);
  })
  cy.get("[data-testid=resultLink]").should("be.visible").should("contain.text", source);
}