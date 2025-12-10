# Mocks API – Backend Node.js + Express

Este proyecto implementa una API REST que genera usuarios y mascotas mock mediante Faker, además de persistirlos en MongoDB.

Incluye:

- Rutas para:
  - `/api/mocks/mockingusers`
  - `/api/mocks/mockingpets`
  - `/api/mocks/generateData`
- Swagger para documentación de la API
- Tests funcionales con Mocha + Chai + Supertest
- Dockerfile para generar la imagen del proyecto
- Integración con Docker Hub

---

## 🐳 Imagen Docker en Docker Hub

La imagen se encuentra disponible en:

👉 **https://hub.docker.com/r/sdfunes/mocks-api**

Puedes ejecutarla con:

```bash
docker run -p 8080:8080 sdfunes/mocks-api:latest
```
