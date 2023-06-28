import * as React from 'react';

function FormModal({ fecha, categoria, precio, cantidad, producto, setRow, handleClose, nombre, row, rowLength, currentId }) {

  function handleSubmit(event) {
    event.preventDefault();
    fecha = event.target.elements.fecha.value;
    categoria = event.target.elements.categoria.value;
    producto = event.target.elements.producto.value;
    precio = event.target.elements.precio.value;
    cantidad = event.target.elements.cantidad.value;
    const total = precio * cantidad;
    const newList = {
      id: rowLength + 1,
      fecha,
      categoria,
      producto,
      precio,
      cantidad,
      total
    };

    handleClose();

    setRow((prevList) => prevList.concat(newList));
  }

function handleEdit(event) {
    event.preventDefault();
    const categoriaEditado = event.target.elements.categoria.value;
    const precioEditado = event.target.elements.precio.value;
    const cantidadEditado = event.target.elements.cantidad.value;
    const productoEditado = event.target.elements.producto.value;
  
    const newList = row.map((item) => {
      if (item.id === currentId) {
        return {
          ...item,
          categoria: categoriaEditado,
          precio: precioEditado,
          cantidad: cantidadEditado,
          producto: productoEditado
        };
      } else {
        return item;
      }
    });
  
    setRow(newList);
    handleClose();
  }
  

  if (nombre === 'Agregar producto') {
    return (
      <form className='FormModal' onSubmit={handleSubmit}>
        <div>
          <label>Fecha</label>
          <input type='date' name='fecha' required />
        </div>

        <div>
          <label>Categoria</label>
          <input type="radio" id="limpieza" name="categoria" value="limpieza" required />
          <label htmlFor="limpieza">Limpieza</label>
          <input type="radio" id="comestibles" name="categoria" value="comestibles" required />
          <label htmlFor="comestibles">Comestibles</label>
          <input type="radio" id="descartables" name="categoria" value="Descartables" required />
          <label htmlFor="descartables">Descartables</label>
          <input type="radio" id="otros" name="categoria" value="otros" required />
          <label htmlFor="otros">Otros</label>
        </div>

        <div>
          <label>Producto</label>
          <input type='text' name='producto' placeholder="Ingresar nombre producto" required />
        </div>

        <div>
          <label>Precio</label>
          <input type='number' name='precio' placeholder="Ingresar precio individual" required />
        </div>

        <div>
          <label>Cantidad</label>
          <input type='number' name='cantidad' placeholder="Ingresar cantidad de productos" required />
        </div>

        <button type='submit' name='AddButton' >Add</button>
        <button onClick={handleClose}>Cancelar</button>
      </form>
    );
  } else {
    return (
      <form className='FormModal' onSubmit={handleEdit}>
        <div>
          <label>Fecha</label>
          <input type='text' name='fecha' placeholder={fecha} disabled />
        </div>

        <div>
          <label>Categoria</label>
          <input type="radio" id="limpieza" name="categoria" value="limpieza" required />
          <label htmlFor="limpieza">Limpieza</label>
          <input type="radio" id="comestibles" name="categoria" value="comestibles" required />
          <label htmlFor="comestibles">Comestibles</label>
          <input type="radio" id="descartables" name="categoria" value="Descartables" required />
          <label htmlFor="descartables">Descartables</label>
          <input type="radio" id="otros" name="categoria" value="otros" required />
          <label htmlFor="otros">Otros</label>
        </div>

        <div>
          <label>Producto</label>
          <input type='text' name='producto' placeholder={producto} required />
        </div>

        <div>
          <label>Precio</label>
          <input type='number' name='precio' placeholder={precio} required />
        </div>

        <div>
          <label>Cantidad</label>
          <input type='number' name='cantidad' placeholder={cantidad} required />
        </div>

        <button type='submit' name='EditButton' >Editar</button>
        <button onClick={handleClose}>Cancelar</button>
      </form>
    );
  }
}

export default FormModal;
