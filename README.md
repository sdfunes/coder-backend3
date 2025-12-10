# Mocks API – Backend Node.js + Express

Este proyecto implementa una API REST que genera usuarios y mascotas mock mediante Faker, además de persistirlos en MongoDB. También se agregaron endpoints de session para logueo con jwt y logout vistos en la cursada.

Incluye:

- Rutas para:
  - `/api/mocks/mockingusers`
  - `/api/mocks/mockingpets`
  - `/api/mocks/generateData`
  - `/api/users`
  - `/api/pets`
  - `/api/sessions/login`
  - `/api/sessions/logout`
- Swagger para documentación de la API
- Tests funcionales con Mocha + Chai + Supertest
- Dockerfile para generar la imagen del proyecto
- Integración con Docker Hub

---

## 🐳 Imagen Docker en Docker Hub

La imagen se encuentra disponible en:

👉 **https://hub.docker.com/r/sdfunes/mocks-api**

Comando para ejecutar la imagen:

```bash
docker run -p 8080:8080 sdfunes/mocks-api:latest
```
