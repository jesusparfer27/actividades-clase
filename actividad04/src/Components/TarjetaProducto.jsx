import "./TarjetaProducto.css";
import { datos } from '../datos'
// nombre, imagen, precio, y stock del producto

const TarjetaProducto = ({ id, img, nombreProducto, precioProducto, stock }) => {
   
      return (
      <>
      <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100&display=swap" rel="stylesheet"></link>
         {datos.map((producto) => (
         <div className="tarjeta" key={producto.id}>
            <div className="contenedorimg">
            <img className="img" src={producto.img} alt={producto.nombreProducto} />
            </div>
            <h2>{producto.nombreProducto}</h2>
            <h4>Precio: ${producto.precioProducto}</h4>
               {producto.stock < 5 ? (<><p className="ultimo-stock">stock:{producto.stock}</p><p>¡Ultimas unidades!</p></>) : (<><p className="stock">stock:{stock}</p></>)}

               {producto.stock === 0 ? (<p>Sin stock</p>) : (<button className="boton">comprar</button>)}
          </div>
         ))}
      </>
      );
   };

   export default TarjetaProducto