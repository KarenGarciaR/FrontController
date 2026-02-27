Front Controller - Sistema de Biblioteca
---Descripción del Proyecto---

Este proyecto implementa el patrón de diseño Front Controller utilizando Node.js y Express.
El sistema simula una biblioteca digital sencilla donde la navegación se controla desde un único punto de entrada, permitiendo centralizar el flujo de las solicitudes y delegarlas a los controladores correspondientes según el parámetro recibido en la URL.
El objetivo principal es demostrar cómo funciona el patrón Front Controller en un entorno backend con JavaScript.

---Front Controller---

El patrón Front Controller centraliza todas las solicitudes en un único punto de entrada, el cual se encarga de:

*Recibir todas las peticiones del cliente
*Aplicar middlewares
*Redirigir al controlador adecuado
*Retornar la respuesta correspondiente

En este proyecto, el Front Controller se encuentra en:

app.js
donde el flujo del Sistema es:

Cliente → app.js → Router → Controller → Respuesta

*El cliente realiza una petición desde el navegador.
*La solicitud entra por app.js.
*Se ejecuta el middleware.
*El router evalúa el parámetro opcion.
*Se llama al método correspondiente del controlador.
*Se devuelve la vista al cliente.

Estructura del Proyecto

FrontController/
│
├── controllers/
│   └── libraryController.js
│
├── middlewares/
│   └── logger.js
│
├── routes/
│   └── index.js
│
├── app.js
├── package.json
└── node_modules/

---------------------------------------------------------------
controllers
Contiene la lógica del sistema y las funciones que generan las vistas.

middlewares
Contiene funciones que se ejecutan antes de que la solicitud llegue al controlador (por ejemplo, registro de accesos).

routes
Define la ruta principal y controla la navegación según el parámetro recibido.

app.js
Es el punto de entrada del sistema y donde se inicializa el servidor.
Aquí se implementa el patrón Front Controller.

---Diagrama UML de Clases---

+--------------------+
|       Router       |
+--------------------+
| - logger           |
| - libraryController|
+--------------------+
| + get('/')         |
+--------------------+
          |
          v
+----------------------+
|  LibraryController   |
+----------------------+
| + menu()             |
| + home()             |
| + books()            |
| + contact()          |
+----------------------+

+------------------+
|     Logger       |
+------------------+
| + logRequest()   |
+------------------+

***Relaciones:

Router utiliza LibraryController

Router utiliza Logger como middleware

----Explicación del Funcionamiento----

El sistema utiliza una única ruta principal ('/').
Dependiendo del parámetro enviado en la URL:

/?opcion=1 → Muestra la página principal

/?opcion=2 → Muestra la sección de libros

/?opcion=3 → Muestra la sección de contacto

Sin parámetro → Muestra el menú principal

El router evalúa el valor del parámetro mediante una estructura switch y llama al método correspondiente del controlador.

---Instrucciones de Instalación---

1. Clonar el repositorio:

git clone (https://github.com/KarenGarciaR/FrontController.git)

2. Instalar dependencias:

npm install

3. Ejecutar el proyecto en modo desarrollo:

npm run dev

4. Abrir en el navegador:

http://localhost:3000

---Tecnologías Utilizadas---

Node.js
Express
Nodemon

:D
