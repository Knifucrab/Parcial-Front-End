import * as React from 'react';
import {useState} from 'react';




function FormModal({fecha,categoria,precio,cantidad,producto,setRow,handleClose,nombre,row,rowLength,currentId}){

const [updateState, setUpdateState] =useState(-1)

  function handleSubmit(event){
    event.preventDefault();
      fecha = event.target.elements.fecha.value;
      categoria = event.target.elements.categoria.value;
      producto = event.target.elements.producto.value;
      precio = event.target.elements.precio.value;
      cantidad = event.target.elements.cantidad.value;
      const total = precio * cantidad;
          const newList = {
          id: rowLength+1,
          fecha,
          categoria,
          producto,
          precio,
          cantidad,
          total
          }

          handleClose();
          console.log(row[0]);

setRow((prevList) =>{
return prevList.concat(newList)
})
  }

  function handleEdit(event){
    console.log(currentId);

    const categoriaEditado = event.target.elements.categoria.value;
    const precioEditado = event.target.elements.precio.value;
    const cantidadEditado = event.target.elements.cantidad.value;
    const productoEditado = event.target.elements.producto.value;

    // const newList = row.map((li) =>(
    //   li.id === currentId ? {...li, categoria: categoriaEditado  } : li
    // ))

    // setRow(newList)
    
  }

  if(nombre==='Agregar producto'){
    return(
      <form className='FormModal' onSubmit={handleSubmit}>
    <div>
    <label>Fecha</label>
    <input type='date' name='fecha' required/>
    </div>

    <div>
    <label>Categoria</label>
      <input type="radio" id="limpieza" name="categoria" value="limpieza" required/>
      <label for="limpieza">Limpieza</label>
      <input type="radio" id="comestibles" name="categoria" value="comestibles" required/>
      <label for="comestibles">Comestibles</label>
      <input type="radio" id="descartables" name="categoria" value="Descartables" required/>
      <label for="descartables">Descartables</label>
      <input type="radio" id="otros" name="categoria" value="otros" required/>
      <label for="otros">Otros</label>
    </div>
    
    <div>
    <label>Producto</label>
    <input type='text' name='producto' placeholder="Ingresar nombre producto" required/>
    </div>
   
   <div>
   <label>Precio</label>
    <input type='number' name='precio' placeholder="Ingresar precio individual" required/>
   </div>
    
    <div>
    <label>Cantidad</label>
    <input type='number' name='cantidad' placeholder="Ingresar cantidad de productos" required/>
    </div>
    
    <button type='submit' name='AddButton' >Add</button>
    <button  onClick={handleClose}>Cancelar</button>
    
  </form>
    )
  } else{
    return(
      <form className='FormModal' onSubmit={handleEdit}>
        
    <div>
    <label>Fecha</label>
    <input type='text' name='fecha' placeholder={fecha} disabled/>
    </div>

    <div>
    <label>Categoria</label>
      <input type="radio" id="limpieza" name="categoria" value="limpieza" required/>
      <label for="limpieza">Limpieza</label>
      <input type="radio" id="comestibles" name="categoria" value="comestibles" required/>
      <label for="comestibles">Comestibles</label>
      <input type="radio" id="descartables" name="categoria" value="Descartables" required/>
      <label for="descartables">Descartables</label>
      <input type="radio" id="otros" name="categoria" value="otros" required/>
      <label for="otros">Otros</label>
    </div>
    
    <div>
    <label>Producto</label>
    <input type='text' name='producto' placeholder={producto} required/>
    </div>
   
   <div>
   <label>Precio</label>
    <input type='number' name='precio' placeholder={precio} required/>
   </div>
    
    <div>
    <label>Cantidad</label>
    <input type='number' name='cantidad' placeholder={cantidad} required/>
    </div>
    
    <button type='submit' name='EditButton' >Editar</button>
    <button  onClick={handleClose}>Cancelar</button>
    
  </form>
    )
  }
}

export default FormModal;