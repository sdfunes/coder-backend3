export const swaggerSpecs = {
  openapi: '3.0.1',
  info: {
    title: 'Mocks API',
    version: '1.0.0',
    description: 'API para generar y consultar datos mock (users & pets)',
  },

  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Local server',
    },
  ],

  tags: [
    { name: 'Mocks', description: 'Generación de usuarios y mascotas mock' },
    { name: 'Users', description: 'Operaciones sobre usuarios' },
    { name: 'Pets', description: 'Operaciones sobre mascotas' },
  ],

  paths: {
    /* ------------------------------------------------------
     * Mocks
     * ------------------------------------------------------ */
    '/api/mocks/mockingusers': {
      get: {
        tags: ['Mocks'],
        summary: 'Genera 50 usuarios mock',
        responses: {
          200: {
            description: 'Usuarios generados correctamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    users: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/User' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    '/api/mocks/mockingpets': {
      get: {
        tags: ['Mocks'],
        summary: 'Genera mascotas mock',
        parameters: [
          {
            name: 'count',
            in: 'query',
            schema: { type: 'integer', default: 10 },
            description: 'Cantidad de mascotas a generar',
          },
        ],
        responses: {
          200: {
            description: 'Mascotas generadas',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    pets: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/PetMock' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    '/api/mocks/generateData': {
      post: {
        tags: ['Mocks'],
        summary: 'Genera usuarios y mascotas e inserta en la base de datos',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  users: { type: 'integer', example: 5 },
                  pets: { type: 'integer', example: 3 },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Datos insertados correctamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    insertedUsers: { type: 'integer' },
                    insertedPets: { type: 'integer' },
                  },
                },
              },
            },
          },
        },
      },
    },

    /* ------------------------------------------------------
     * Users
     * ------------------------------------------------------ */
    '/api/users': {
      get: {
        tags: ['Users'],
        summary: 'Obtiene todos los usuarios',
        responses: {
          200: {
            description: 'Lista de usuarios',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    users: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/User' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    /* ------------------------------------------------------
     * Pets
     * ------------------------------------------------------ */
    '/api/pets': {
      get: {
        tags: ['Pets'],
        summary: 'Obtiene todas las mascotas',
        responses: {
          200: {
            description: 'Lista de mascotas',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    pets: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/PetPopulated' },
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

  /* ------------------------------------------------------
   * Schemas
   * ------------------------------------------------------ */
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          first_name: { type: 'string', example: 'Juan' },
          last_name: { type: 'string', example: 'Gonzalez' },
          email: { type: 'string', example: 'juan@mail.com' },
          role: {
            type: 'string',
            enum: ['user', 'admin'],
            example: 'user',
          },
          password: { type: 'string' },
          pets: { type: 'array', items: { type: 'string' } },
          last_connection: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
        },
      },

      PetMock: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Luna' },
          species: { type: 'string', example: 'dog' },
        },
      },

      PetPopulated: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string', example: 'Rocco' },
          species: { type: 'string', example: 'cat' },
          owner: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              first_name: { type: 'string' },
              last_name: { type: 'string' },
              email: { type: 'string' },
            },
          },
        },
      },
    },
  },
};
