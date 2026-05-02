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

El iframe ya quedó preparado con el link oficial de embed:

```text
https://www.canva.com/design/DAHIDlusu0U/RXvQCdLagPw2OUSmEtkCwQ/view?embed
```

No hace falta usar el link viejo `https://lindayezequiel.my.canva.site` dentro del código.

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
