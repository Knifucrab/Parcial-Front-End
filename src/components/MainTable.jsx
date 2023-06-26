import * as React from 'react';
import {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ReusableButton from './ReusableButton';

function MainTable() {

const [row, setRow] = useState(
  [{
  fecha:'15/05/2023',categoria: 'Ford', producto:'papas y gaseosa',precio: 1969, cantidad: 5, total: 10000,
  },
  {
    fecha:'PAPA XVII',categoria: 'Pepe', producto:'coca',precio: 1969, cantidad: 5, total: 10000,
    }
],
  );

function addProduct(){

  setRow({
    fecha:{}
  })

}

function editProduct(){

}

  return (

    <Box sx={{  m: 5, flexGrow: 1 }}>

      <ReusableButton nombre="Agregar producto" funcion={addProduct} />

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Producto</TableCell>
            <TableCell align="right">Precio unitario</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) =>(
            <TableRow 
            key={row.fecha}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
          >
<TableCell component="th" scope="row">
                {row.fecha}
              </TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
              <TableCell align="right">{row.producto}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="center">
                <ReusableButton 
                nombre="Editar"
                fecha={row.fecha}
                categoria={row.categoria}
                precio={row.precio}
                cantidad={row.cantidad}
                total={row.total}
                funcion={editProduct}
                
                />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default MainTable;