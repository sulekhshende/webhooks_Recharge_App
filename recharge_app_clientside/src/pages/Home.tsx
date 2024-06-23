import React, { useState } from 'react';
import RechargeForm from '../components/RechargeForm';
import Navbar from '../components/Navbar';
const Home = () => {

  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState(1);

  return (
    <>
      <Navbar />
      <RechargeForm mobileNo={mobileNo} amount={amount} />
    </>
  )
}

export default Home