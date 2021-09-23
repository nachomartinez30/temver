import { useState } from 'react'

import Head from 'next/head'
import Navbar from './components/Header';
import Badge from './components/Badge';

export default function Home() {
  return (
    <>
      <Head>TEMVER Servicios y construcciones</Head>
      <Navbar />
      <Badge />
    </>
  );
}
