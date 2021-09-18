import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {Grid, TextField} from '@material-ui/core'


 const AddressInput = ({name, label,required}) => {
    const {control }= useFormContext();
    
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
            render={({ field }) => (
              <TextField {...field}
              label ={label} 
               required ={required}
               fullWidth
              />)}
                control ={control} 
                defaultValue='' 
                name={name} 
             />

        </Grid>
    )
}

export default AddressInput