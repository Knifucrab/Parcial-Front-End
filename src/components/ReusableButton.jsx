import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormModal from './FormModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ReusableButton({nombre,fecha,categoria,precio,cantidad,total,funcion,setRow,producto,row,rowLength,currentId}){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Box sx={{ m: 5, flexGrow: 1 }}>
        <Button variant="outlined" onClick={handleOpen}>{nombre}</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
      
      <Box sx={style}>
          <FormModal 
          fecha={fecha}
          categoria={categoria}
          precio={precio}
          cantidad={cantidad}
          total={total}
          funcion={funcion}
          setRow={setRow}
          handleClose={handleClose}
          nombre={nombre}
          producto={producto}
          row={[row]}
          rowLength={rowLength}
          currentId={currentId}
          />
        </Box>

      </Modal>
        </Box>
        
    )
}

export default ReusableButton;