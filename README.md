# IT-S7-TMDB-API

## 🗂️Tabla de contenidos

- [IT-S7-TMDB-API](#it-s7-tmdb-api)
  - [🗂️Tabla de contenidos](#️tabla-de-contenidos)
  - [📄Descripción](#descripción)
    - [1. Listado de películas](#1-listado-de-películas)
    - [2. Detalles de la película](#2-detalles-de-la-película)
    - [3. Carga de más películas](#3-carga-de-más-películas)
  - [💻Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [📋Requisitos](#requisitos)
  - [🛠️Instalación](#️instalación)
    - [1. Descargar el repositorio](#1-descargar-el-repositorio)
    - [2. Instalación de paquetes Node.js](#2-instalación-de-paquetes-nodejs)
  - [▶️Ejecución](#️ejecución)
    - [Testing](#testing)
  - [📸 Demo](#-demo)

## 📄Descripción

PENDIENTE

Web donde se visualizan las películas últimas películas en cartelera, nutriéndose de la API de TMDB.
Se puede acceder a los detalles de cada película

### 1. Listado de películas

- Creación de la estructura básica del proyecto.
- Conexión con la API de TMDB a través de un servicio.
- Separación de datos en variables de entorno.
- Creación de componente `Home`.
- Mostrar información e imágenes del listado de películas.

### 2. Detalles de la película

- Componente `movie-details` para la carga de datos.
- Añadida funcionalidad al servicio, cargando más información de la API.
  - Obtener detalles de la película.
  - Créditos.
  - Películas similares.
  - Películas recomendadas.
- Diseño básico de pantalla de MovieDetails.
- Carga de datos.
- Movimento entre películas mediante rutas.
- Optimización de llamada a la API.

<div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; margin-top: 1rem;">
  <img src="public/ex2.png" width="300" style="vertical-align: top;">
  <img src="public/ex2-similar.png" width="300" style="vertical-align: top;">
  <img src="public/ex2-recommendations.png" width="300" style="vertical-align: top;">
</div>

### 3. Carga de más películas

- Modificar carga de datos tienendo en cuenta la paginación.
- Función `appendMovies()`.
- Directiva `scroll-end`.
- Carga automática de películas extra al llegar al final de la página.

<img src="public/ex3.png" width="400" style="margin-top: 1rem; margin-bottom: 1rem;">

## 💻Tecnologías Utilizadas

PENDIENTE

- HTML
- SASS
- Typescript
- Angular
- Eslint
- Karma / Jasmine
- Angular Material

## 📋Requisitos

PENDIENTE 

- Navegador web
- Node.js
  
## 🛠️Instalación

PENDIENTE

### 1. Descargar el repositorio

```shell
git clone https://github.com/soyjuandelgado/IT-S7-TMDB-API.git destino
```

### 2. Instalación de paquetes Node.js

```shell
npm install
```

## ▶️Ejecución

```shell
ng serve -o
```

### Testing

```shell
ng test
```

## 📸 Demo

Visitar la web: [Web](https://it-s7-tmdb-api.vercel.app/)
