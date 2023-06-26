import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';



function Form({fecha,categoria,precio,cantidad,total,funcion}){

    console.log(fecha)

    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 5, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div> 
            <TextField
          required
          id="inputFecha"
          label="Fecha"
          defaultValue={fecha}
        />
        <TextField
          required
          id="inputCategoria"
          label="Categoria"
          defaultValue={categoria}
        />
        <TextField
          required
          id="inputPrecio"
          label="Precio"
          defaultValue={precio}
        />
        <TextField
          required
          id="inputCantidad"
          label="Cantidad"
          defaultValue={cantidad}
        />
        <TextField
          required
          id="inputTotal"
          label="Total"
          defaultValue={total}
        />

        <Stack spacing={2} direction="row">
            <Button variant="outlined"  startIcon={<CancelIcon />}>
                Cancelar
            </Button>
            <Button onClick={funcion} variant="contained" endIcon={<SendIcon />}>
                Confirmar
            </Button>
         </Stack>
        </div>
        </Box>
    )
}

export default Form;