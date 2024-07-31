import { Grid, TextField, Box, Button } from '@mui/material';
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'

export type RechargeData = {
    mobileNo?: string;
    amount?: number;

}

const RechargeForm = ({mobileNo, amount} : RechargeData) => {
  const [formData, setFormData] = useState({
      mobileNo: '',
      amount: amount
  }) 
  
  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const res = await axios.post("http://localhost:4500/api/recharge", formData);
            console.log(res.data);
            return res.data;
        } catch {

        }
          
  }

  return (

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 20 }} display="flex" justifyContent="center" >
            <Grid >
                <Grid item xs={12} sm={6} >
                    <TextField
                        id="mobileNo"
                        label="Mobile Number :"
                        name="mobileNo"
                        type={mobileNo}
                        placeholder="enter mobileNo..."
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt:5 }}>
                    <TextField
                        id="amount"
                        label="amount"
                        name="amount"
                        placeholder="enter amount.."
                        value={formData.amount}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Recharge
                </Button>
            </Grid>
        </Box>    
  )
}

export default RechargeForm;
