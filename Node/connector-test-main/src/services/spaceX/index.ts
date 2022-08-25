export const Docs = {
  openapi: "3.0.3",
  info: {
    version: "0.0.1",
    title: "Apideck",
  },
  servers: [{ url: "https://unify.apideck.com" }],
  externalDocs: {
    description: "Apideck Developer Docs",
    url: "https://developers.apideck.com",
  },

  security: { api_key: [] },
  paths: {
    "/hello": {
      get: {
        operationId: "hello",
        responses: {
          "200": {
            description: "Say hello",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/space/rockets/{rocketId}": {
      get: {
        operationId: "rocketsOne",
        responses: {
          "200": {
            description: "Get a rocket",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    rocket: {
                      type: "object",
                      additionalProperties: false,
                      properties: {
                        id: {
                          type: "string",
                          readOnly: true,
                          example: "12345",
                        },
                        company: {
                          type: "string",
                          readOnly: true,
                          example: "Apideck",
                        },
                        country: {
                          type: "string",
                          readOnly: true,
                          example: "12345",
                        },
                        main_image: {
                          type: "string",
                          readOnly: true,
                          example:
                            "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
                        },
                        cost_per_launch: {
                          type: "object",
                          readOnly: true,
                          properties: {
                            amount: {
                              type: "number",
                              readOnly: true,
                              example: "12345",
                            },
                            currency: {
                              type: "string",
                              readOnly: true,
                              example: "USD",
                            },
                          },
                          example: {
                            amount: "12345",
                            currency: "USD",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
