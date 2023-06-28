import { Box, Button, Radio, TextField, Typography } from '@mui/material';
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
  
    setRow(prevList => {
      return prevList.map(item => {
        if (item.id === currentId) {
          return {
            ...item,
            categoria: categoriaEditado,
            precio: precioEditado,
            cantidad: cantidadEditado,
            producto: productoEditado
          };
        }
        return item;
      });
    });
  
    handleClose();
  }
  
  

  if (nombre === 'Agregar producto') {
    return (
      <form className='FormModal' onSubmit={handleSubmit}>
        <Box sx={{mb: 2}}>
          <TextField label="Fecha" color="secondary" focused type='date' name='fecha' required />
        </Box>

        <Box>
          <Typography>Categoria</Typography>

          <Typography sx={{display:'inline-block', mr: 5}} htmlFor="limpieza">Limpieza</Typography>
          <input type="radio" id="limpieza" name="categoria" value="limpieza" required /><br />

          <Typography sx={{display:'inline-block', mr: 1.9}} htmlFor="comestibles">Comestibles</Typography>
          <input type="radio" id="comestibles" name="categoria" value="comestibles" required /><br />
          
          <Typography sx={{display:'inline-block', mr: 1.2}} htmlFor="descartables">Descartables</Typography>
          <input type="radio" id="descartables" name="categoria" value="Descartables" required /><br />
          <Typography sx={{display:'inline-block', mr: 8.2}} htmlFor="otros">Otros</Typography>
          <input type="radio" id="otros" name="categoria" value="otros" required />
        </Box>

        <Box sx={{mb: 2, mt: 2}}>
          <TextField type='text' color="secondary"  label='Producto' name='producto' placeholder="Ingresar nombre producto" required />
        </Box>

        <Box sx={{mb: 2}}>
          <TextField type='number' color="secondary"  label='Precio' name='precio' placeholder="Ingresar precio individual" required />
        </Box>

        <Box sx={{mb: 2, mt: 2}}>
          <TextField type='number' color="secondary"  label='Cantidad' name='cantidad' placeholder="Ingresar cantidad de productos" required />
        </Box>
      <Box display='flex' justifyContent='space-around'>
        <Button variant='contained' type='submit' name='AddButton' sx={{backgroundColor: 'rgb(100, 53, 65)'}} >Add</Button>
        <Button variant='contained' onClick={handleClose} sx={{backgroundColor: 'rgb(201, 143, 168)'}}>Cancelar</Button>
      </Box>
      </form>
    );
  } else {
    return (
      <form className='FormModal' onSubmit={handleEdit}>
        <Box sx={{mb: 2}}>
          <TextField label="Fecha" color="secondary" focused name='fecha' disabled defaultValue={fecha} />
        </Box>

        <Box>
          <Typography>Categoria</Typography>

          <Typography sx={{display:'inline-block', mr: 5}} htmlFor="limpieza">Limpieza</Typography>
          <input type="radio" id="limpieza" name="categoria" value="limpieza" required /><br />

          <Typography sx={{display:'inline-block', mr: 1.9}} htmlFor="comestibles">Comestibles</Typography>
          <input type="radio" id="comestibles" name="categoria" value="comestibles" required /><br />
          
          <Typography sx={{display:'inline-block', mr: 1.2}} htmlFor="descartables">Descartables</Typography>
          <input type="radio" id="descartables" name="categoria" value="Descartables" required /><br />
          <Typography sx={{display:'inline-block', mr: 8.2}} htmlFor="otros">Otros</Typography>
          <input type="radio" id="otros" name="categoria" value="otros" required />
        </Box>

        <Box sx={{mb: 2, mt: 2}}>
          <TextField type='text' color="secondary"  label='Producto' name='producto' placeholder="Ingresar nombre producto" required />
        </Box>

        <Box sx={{mb: 2}}>
          <TextField type='number' color="secondary"  label='Precio' name='precio' placeholder="Ingresar precio individual" required />
        </Box>

        <Box sx={{mb: 2, mt: 2}}>
          <TextField type='number' color="secondary"  label='Cantidad' name='cantidad' placeholder="Ingresar cantidad de productos" required />
        </Box>
        
        <Box display='flex' justifyContent='space-around'>
        <Button variant='contained' sx={{backgroundColor: 'rgb(100, 53, 65)'}} type='submit' name='EditButton' >Editar</Button>
        <Button variant='contained' sx={{backgroundColor: 'rgb(201, 143, 168)'}} onClick={handleClose}>Cancelar</Button>
        </Box>
      </form>
    );
  }
}

export default FormModal;
