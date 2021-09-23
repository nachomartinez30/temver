import { useState } from 'react'

import Head from 'next/head'
import Navbar from './components/Header';
import Badge from './components/Badge';

export default function Home() {
  return (
    <>
      <Head><title>TEMVER Servicios y construcciones</title></Head>
      <Navbar />
      <Badge />
    </>
  );
}
