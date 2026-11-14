# Portafolio — Santiago Morales Itzcoatl

Sitio estático en HTML, CSS y JavaScript. No necesita backend ni dependencias.

## Estructura

```
portfolio3/
├── index.html     # Página principal
├── project.html   # Página de detalle (una plantilla para todos los proyectos)
├── data.js        # TODA la información de proyectos: edítala aquí
├── script.js      # Genera las tarjetas del índice
├── project.js     # Genera la página de detalle según ?id=
├── styles.css     # Estilos
├── downloads/     # FPD.zip (con contraseña) y keypaste-extension-v1_0_1.zip
└── README.md
```

## Agregar o editar un proyecto

Abre `data.js` y edita o copia un bloque dentro de `PROJECTS`. El campo `group` decide la sección: `software`, `game` u `outdated`. El campo `id` define la URL de su página de detalle (`project.html?id=...`).

## Ver en local (Linux)

```bash
cd portfolio3
python3 -m http.server 8000
```

Abre http://localhost:8000.

## Desplegar gratis

- **GitHub Pages:** sube la carpeta a un repositorio, luego *Settings → Pages* con la rama `main` y `/ (root)`.
- **Netlify:** arrastra la carpeta a https://app.netlify.com/drop.
- **Cloudflare Pages:** conecta el repositorio, sin comando de build, con directorio de salida `/`.

## Pendientes

- Las portadas de los juegos son tarjetas tipográficas. Puedes reemplazarlas por las portadas oficiales de itch.io.
- Creacarti: la descripción viene de lo que se sabe del sitio; revísala.
- Los enlaces de GitHub apuntan al perfil `FreakPuppyGameStudio`. Si tienes repositorios individuales, cámbialos en `data.js` (`links`).
