# Clase 3: Ciclo de vida de Redux

[Redux Data Flow and React Component Life Cycle](https://dev.to/oahehc/redux-data-flow-and-react-component-life-cycle-11n)

# Clase 8: Integrando Redux

- **mapStateToProps** es una función recibe nuestro estado y retorna un objeto cuyas propiedades van a ser enviadas a las props del componente que se está conectado a redux.
- **mapDispatchToProps** es una función que recibe el dispatcher de redux y retorna un objeto que será mapedo a las propiedades con los action creatrors

https://redux.js.org/tutorials/essentials/part-1-overview-concepts

# Clase 9: Hooks vs. Connect

- Boilerplate: Los hooks ahorran código.
- Separación de responsabilidades: Connect hace un HOC, así que es mejor.
- Testing: Es un poco más fácil con Connect.

Redux recomienda usar Hooks API.
[Use the React-Redux Hooks API](https://redux.js.org/style-guide/#use-the-react-redux-hooks-api)

# Clase 11: Middlewares

Es una pieza de código que se ejecuta cuando X recibe un request y ese mismo X da respuesta al request.

Ayuda a los desarrolladores a diseñar aplicaciones con mayor eficiencia. Además, actúa como hilo conductor entre las aplicaciones, los datos y los usuarios.

Los podemos usar para:

- Hacer logs de errores
- Hacer fetch de data
- Depurar nuestra aplicación
- También podemos customizar nuestra data con applyMiddleware

## Links de interés
- [compose](https://es.redux.js.org/docs/api/compose.html) -> sirve para componer funciones (de un solo argumento, de derecha a izquierda) en este caso los enhacers (hocs para añadir funcionalidades) o middlewares.
- [sentry](https://sentry.io/for/react/) -> herramienta logger para react
- [glosario](https://es.redux.js.org/docs/glosario.html)

# Clase 13: Redux Thunk

Es un middleware para Redux que maneja asincronismo dentro de los **actions** haciendo que devuelvan una función que recibe un dispatch, la misma que puede despachar la acción asíncrona.

## Links de interés
- [Thunk middleware for React](https://github.com/reduxjs/redux-thunk)
- [Writing Logic with Thunks](https://redux.js.org/usage/writing-logic-thunks)
- [Redux-Saga - An intuitive Redux side effect manager](https://redux-saga.js.org)
- [React Redux middlewares: Thunk vs Saga](https://blog.devgenius.io/react-redux-middlewares-thunk-vs-saga-e346a25319b3)

# Clase 18: Agregando Inmutabilidad

Añadir *inmutabilidad* nos asegura que el estado sea inmutable, evitando renders innecesarios al asegurar que el estado se mantenga inalterable, solo mediante los *reducers*

## Links de interés
- [Immutable Docs](https://immutable-js.com/docs/latest@main)

# Clase 20: Redux Toolkit

Redux Toolkit es una libreria que simplifica el uso de *redux* al eliminar boilerplates y dependencias adicionales, haciendo mas sencillo el uso de redux.

## Links de interés
- [Getting Started with Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Alternativas a Redux](https://dev.to/asayerio_techblog/is-redux-dead-1d2a)