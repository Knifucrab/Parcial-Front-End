import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ReusableButton from './ReusableButton';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function MainTable() {
  const [row, setRow] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const rowLength = row.length;

  function handleDelete(id) {
    setDeleteItemId(id);
    setShowConfirmation(true);
  }

  function confirmDelete() {
    const newList = row.filter((item) => item.id !== deleteItemId);
    setRow(newList);
    setShowConfirmation(false);
  }

  function cancelDelete() {
    setDeleteItemId(null);
    setShowConfirmation(false);
  }

  return (
    <Box sx={{ m: 5, flexGrow: 1 }}>
      <ReusableButton nombre="Agregar producto" setRow={setRow} rowLength={rowLength} row={row} />

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
            {row.map((row) => (
              <TableRow key={row.fecha} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                    producto={row.producto}
                    categoria={row.categoria}
                    precio={row.precio}
                    cantidad={row.cantidad}
                    total={row.total}
                    setRow={setRow}
                    row={row}
                    rowLength={rowLength}
                    currentId={row.id}
                  />
                  <Button sx={{backgroundColor: 'rgb(201, 143, 168)'}} variant="contained" currentId={row.id} onClick={() => handleDelete(row.id)}>
                    Borrar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={showConfirmation}
        onClose={cancelDelete}
        aria-labelledby="delete-confirmation-modal"
        aria-describedby="delete-confirmation-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', p: 4 }}>
          <h2 id="delete-confirmation-modal">¿Está seguro de que desea borrar?</h2>
          <Box display="flex"  justifyContent= 'space-around'>
          <Button variant="contained" sx={{mt: 3, backgroundColor: 'rgb(100, 53, 65)'}} onClick={confirmDelete}>
            Sí
          </Button>
          <Button variant="contained" sx={{mt: 3, backgroundColor: 'rgb(201, 143, 168)'}} onClick={cancelDelete}>
            No
          </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default MainTable;
