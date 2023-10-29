# React + Vite + Bootstrap

#### Manual de iniciación de Rect (front-end)

1. Nuevo proyecto en vite:
   npm create vite@latest my-vue-app --template vue

2. Añadir bootstrap a vite, tambien |

```
npm install --save-dev bootstap
npm install --save-dev react-bootstap
```

3. Multiples páginas en react:

```
npm install react-router-dom
```

4. En main.jsx:

```
import {createBrowserRouter,
        RouterProvider,
        Route} from 'react-router-dom'
```

5. Luego crear en el proyecto un archivo .jsx con las rutas de las páginas:

```
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello World</div>
    },
]);

export default Router;
```

6. En main.jsx:

```
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
```

7. Ir a index.html y en el div con class="root" cambiarlo a:

```<div id="root" style="width: 100%; height: 100%;"></div>

```

#### Manual de usuario La api se inicializa con: yarn start

1. Instalación de yarn: se ejecuta el comando:

```
npm install --global yarn
```

(es como npm)

2. Instalación de moongose:

```
yarn add mongoose
```

3. Instalación de express:

```
yarn add express
```

4. Instalación de nodemon:

```
yarn add nodemon -D
```

esto es para que se actualice la api sin necesidad de tener que reiniciar, el -D es para que solo este presente en el entorno de desarrollo

#### Calendario

Instalar calendario:

```
npm install react-big-calendar moment
```
