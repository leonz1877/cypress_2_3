it("Should create new pet", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 150123,
      category: { id: 15012, name: "string" },
      name: "murzik",
      photoUrls: ["string"],
      tags: [
        {
          id: 1501,
          name: "string",
        },
      ],
      status: "available",
    },
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
    expect(response.body.id).to.eq(150123);
  });
});

it("Should update pet", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 150123,
      category: { id: 15012, name: "string" },
      name: "murzik",
      photoUrls: ["string"],
      tags: [
        {
          id: 1501,
          name: "string",
        },
      ],
      status: "available",
    },
  });

  cy.request({
    method: "PUT",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 150123,
      category: {
        id: 15012,
        name: "string",
      },
      name: "pushok",
      photoUrls: ["string"],
      tags: [
        {
          id: 1501,
          name: "string",
        },
      ],
      status: "available",
    },
  });

  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/pet/150123",
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.body.name).to.eq("pushok");
  });
});

it("Should delete pet", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 150123,
      category: { id: 15012, name: "string" },
      name: "murzik",
      photoUrls: ["string"],
      tags: [
        {
          id: 1501,
          name: "string",
        },
      ],
      status: "available",
    },
  });

  cy.request({
    method: "DELETE",
    url: "https://petstore.swagger.io/v2/pet/150123",
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});
