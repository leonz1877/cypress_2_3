//создать пользователя
it("Should create new user", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/",
    body: {
      id: 150123,
      username: "our-everything",
      firstName: "Alexander",
      lastName: "Pushkin",
      email: "german@settlement.de",
      password: "naughty",
      phone: "+7123789",
      userStatus: 1,
    },
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});

// обновить пользователя
it("Should update user", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/",
    body: {
      id: 150123,
      username: "our-everything",
      firstName: "Alexander",
      lastName: "Pushkin",
      email: "german@settlement.de",
      password: "naughty",
      phone: "+7123789",
      userStatus: 1,
    },
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });

  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/user/login",
    body: {
      username: "our-everything",
      password: "naughty",
    },
  });

  cy.request({
    method: "PUT",
    url: "https://petstore.swagger.io/v2/user/our-everything",
    body: {
      id: 150123,
      username: "our-everything",
      firstName: "Sasha",
      lastName: "Pushkin",
      email: "german@settlement.de",
      password: "naughty",
      phone: "+7123789",
      userStatus: 1,
    },
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });

  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/user/our-everything",
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.body.firstName).to.eq("Sasha");
  });
});

// удалить пользователя
it("Should delete user", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/",
    body: {
      id: 150123,
      username: "our-everything",
      firstName: "Alexander",
      lastName: "Pushkin",
      email: "german@settlement.de",
      password: "naughty",
      phone: "+7123789",
      userStatus: 1,
    },
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });

  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/user/login",
    body: {
      username: "our-everything",
      password: "naughty",
    },
  });

  cy.request({
    method: "DELETE",
    url: "https://petstore.swagger.io/v2/user/our-everything",
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});
