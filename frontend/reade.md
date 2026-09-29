# LAB CRUD -FRONTED

React + Vite para consumir el backend del laboratorio 


## Requisitos


- Node.js 20+
- Backend ejecutandose en `http://localhost:3000`
- Base de datos `lab_crud`


## Instalar

``` bash
npm install
```

fronted: `http://localhost:5173`

## Usuarios de prueba


Admin:

-  `cliente@labcrud.local` 
-  `Password123!`

## Responsabilidades

- `assets`: estilos y recursos.
- `components`: componentes reutilizables.
- `config`: configuracion del fronted.  
- `context`: estado global de autenticacion 
- `hooks`: hooks propios
- `pages`: pantallas. 
- `services`: comunicacion con la API
- `utils`: almacenamiento de sesion

## flujo

login -> Authcontext -> JWT en localStorage -> `api.js` agrega Bearer token -> backend verifica JWT -> autorizacion por rol.

El boton ELliminar solo aparece para `admin`, pero el backend tambien verifica el rol. Ocultar un boton en React no constituye seguridad.