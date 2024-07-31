import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'

type RechargeData = {
    data:any;
    setRecharges:any;
}

const UpdateRechargeComponent = (prop: RechargeData) => {

  const handleClick = async(rechargeId:number) => {
    try {
        const res = await axios.put(`http://localhost:3005/api/changeStatus/${rechargeId}`);
        console.log(res.data);
        setUpdatedRecharges();
        //prop.setRecharges(res.data);
    } catch (error) {
        console.log(error);
    }
  }

  const setUpdatedRecharges = async () => {
    try {
        const res = await axios.get("http://localhost:3005/api/getRecharges");
        prop.setRecharges(res.data);
    } catch (error) {
        
    }
  }

  return (
    <>
      <Card sx={{ mb:3 ,borderRadius:4 }} >
        <CardContent>
            <Grid container>
                <Grid item xs={12} sm={5} md={6} lg={6} >
                    <Box sx={{ display:"flex" }} >
                        <Box sx={{ minWidth:"fit-content" }} >
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >MobileNo :</Typography>
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >{prop.data.mobileNo}</Typography>
                        </Box>
                        <Box sx={{ ml:3, minWidth:"fit-content" }} >
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >amount</Typography>
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >{prop.data.amount}</Typography>
                        </Box>
                        <Box sx={{ ml:3, minWidth:"fit-content" }} >
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >status</Typography>
                            <Typography variant='h6' sx={{ fontSize:"26px" }} >{prop.data.status}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={7} md={6} lg={6} >
                <Box sx={{ display:'flex', flexDirection:'row', justifyContent:"center" }} >
                    <Box mr={3} >
                        <Button 
                           sx={{
                            "&:disabled":{
                                cursor: "not-allowed"
                            }
                           }}
                           disabled={prop.data.status === 1}
                           variant='contained'
                           onClick={() => handleClick(prop.data.rechargeId)}
                        >
                            update
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default UpdateRechargeComponent;