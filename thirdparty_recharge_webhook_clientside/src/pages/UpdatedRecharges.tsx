import {  Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import {RechargeDocument} from './RequestedRecharges';


const UpdatedRecharges = () => {

  const [recharges, setRecharges] = useState< RechargeDocument[] >([]); 
  
  useEffect(() => {
     getRecharges();
  },[]);

  const getRecharges = async () => {
    try {
        const res = await axios.get("http://localhost:3005/api/getRecharges");
        setRecharges(res.data);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
    <Navbar />  
    <Container sx={{ justifyContent: "center" }} >
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }} >
          <Box component="span" >
              <TableContainer sx={{ maxWidth: "flex", minWidth: "center" }} >
                  <Table sx={{ maxWidth: "flex", minWidth: "center" }} aria-label="simple table" >
                      <TableHead>
                          <TableRow>
                              <TableCell sx={{ fontWeight: 'bold' }} >Mobile No</TableCell>
                              <TableCell sx={{ fontWeight: 'bold' }} >Amount</TableCell>
                              <TableCell sx={{ fontWeight: 'bold' }} >Status</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {
                              recharges.map((recharge:any, index:number) => {
                                  return (
                                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border:0 } }} >
                                          <TableCell>{recharge.mobileNo}</TableCell>
                                          <TableCell>{recharge.amount}</TableCell>
                                          <TableCell>{recharge.status}</TableCell>
                                      </TableRow>
                                  )
                              })
                          }
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Box>
    </Container>
  </>
  )
}

export default UpdatedRecharges;