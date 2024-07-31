import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import UpdatedRechargeComponent from '../components/UpdateRechargeComponent';

export interface RechargeDocument {
    rechargeId: number;
    mobileNo: string;
    amount: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}

const RequestedRecharges = () => {

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
      <Container>
        <Container maxWidth="lg" sx={{pt:6}}>
            {
              recharges.map((recharge:RechargeDocument) => {
                return <UpdatedRechargeComponent setRecharges={setRecharges} data={recharge} key={recharge.rechargeId} />
              })
            }
        </Container>
    </Container>
    </>
  )
}

export default RequestedRecharges;