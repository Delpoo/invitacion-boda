# Invitación de casamiento

Mini web estática para publicar una invitación de casamiento en GitHub Pages.

La página muestra una portada inicial con el botón **Ver invitación**. Después del toque del usuario, reproduce `musica.mp3` en loop y carga la invitación de Canva dentro de la misma página.

## Archivos

- `index.html`: página principal. Debe quedar en la raíz del repo.
- `style.css`: estilos mobile-first.
- `script.js`: controla el botón, la música y el iframe de Canva.
- `musica.mp3`: archivo de audio. Debe subirse manualmente en la raíz, al lado de `index.html`.

## Subir musica.mp3

1. Entrá al repositorio `Delpoo/invitacion-boda` en GitHub.
2. Tocá **Add file** y después **Upload files**.
3. Subí `musica.mp3`.
4. Confirmá el cambio con **Commit changes**.

La ruta final debe quedar así:

```text
invitacion-boda/
  index.html
  style.css
  script.js
  musica.mp3
```

## Canva

El iframe quedó preparado con este link como intento inicial:

```text
https://lindayezequiel.my.canva.site
```

En la validación local, Canva bloqueó el link directo dentro del iframe. Para publicarlo correctamente, abrí Canva y buscá **Compartir > Insertar / Embed**.

- Si Canva te da un link de embed, pegalo en `index.html`, en el atributo `data-canva-url` del iframe `canvaFrame`.
- Si Canva te da un iframe completo, reemplazá el iframe de `index.html` manteniendo `id="canvaFrame"` para que el JavaScript pueda cargarlo después del toque.

Si en GitHub Pages ves una pantalla en blanco después de tocar **Ver invitación**, usá el código oficial de **Embed / Insertar** de Canva y pegalo en el lugar indicado en `index.html`.

## Activar GitHub Pages

1. Creá el repo público `invitacion-boda` en la cuenta `Delpoo`, si todavía no existe.
2. Subí estos archivos a la raíz del repo.
3. En GitHub, entrá a **Settings > Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. En **Branch**, seleccioná `main`.
6. En carpeta, seleccioná `/ (root)`.
7. Guardá los cambios.

El sitio debería quedar disponible en:

```text
https://delpoo.github.io/invitacion-boda/
```

GitHub Pages puede demorar uno o dos minutos en publicar los cambios.

## Prueba final

1. Abrí `https://delpoo.github.io/invitacion-boda/`.
2. Tocá **Ver invitación**.
3. Confirmá que la música comienza después del toque.
4. Confirmá que aparece el botón flotante **Pausar música**.
5. Confirmá que la invitación de Canva se ve dentro de la misma página, sin redireccionar.
