# DESCRIPCION
Presento un e-commerce de pizzas y empanadas.
Con el objetivo de:

* Visualizar todos los productos que se ofrecen en la tienda.
* Ver los detalles, de cada uno de ellos.
* Comprar una o más cantidades.
* Agregar al carrito.
* Tener una compra exitosa.

 Importante:
* Si te arrepetís, podes cancelar tu compra.
* Completarás un formulario, con tus datos, generando una orden de compra.

# DEPENDENCIAS
*bootstrap
*bootswatch
*react-bootstrap
*firebase
*react-router-dom
*react-hook-form
*react-icons
    
# INSTALACION
Estos son los pasos a seguir:

* Instalar Node.js
* Clonar y descargar el proyecto desde GitHub
* Abrirlo en tu editor de código
* Abrir la terminal
* Generar el comando npm install create-app
* Por último el comando npm start

# FUNCIONALIDAD DEL PROYECTO
En la carpeta src se encuentra el archivo principal App.jsx donde está el componenete AppRoutes, éste es el encargado de llamar a cada una de las rutas del proyecto mediante el uso de react-router-dom.
Dentro de src cree una carpeta Components, separando cada uno de ellos, por funcionalidad, como hemos visto a lo largo del curso.
En la carpeta Home se observa la página de inicio, dando una pequeña demostración de lo que trata el e-commerce. En esta sección se puede navegar a las diferentes categorías de productos que se ofrecen.
En componente Navbar también permite navegar entre las diferentes secciones, evitando el refresco de la página.
A partir de ahí se podrá visualizar cada uno de los productos con una pequeña descripción, dando la opción de ver detalles. Esto se realiza mediante el componente ItemListContainer, que luego le da la funcionalidad a ItemList e Item.
Se podrá agregar cantidades, gracias al componente ItemCount.
En los componentes ItemDetail e ItemDetailContainer podremos ver cómo el mencionado anteriormente, se renderiza.
Se ve también reflejado en el componente Cart, cómo el CartContext, brinda todos los datos necesarios, creando variables globales que se pueden compartir fácilmente con otros componentes de mi app. Por ejemplo como eliminar un producto o como sumar cantidades.
En el componente Cart, al finalizar la compra, aparecerá un formulario, donde se pedirá los datos personales del usuario, generando un número de orden, proveniente de la colección de ordenes de firebase.
El último componente es el Footer, sin funcionalidad alguna, sólo fue creado para darle un estilo más a mi proyecto.

# VIDEO DESCRIPTIVO

https://drive.google.com/file/d/1LOAV9kiQ4Gh8s3RADUvrGRb51DolSSnB/view?usp=sharing