import Head from 'next/head'
import Navbar from './components/Header';
import Badge from './components/Badge';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Services from './components/Services';

export default function Home() {
  return (
    <div>
      <Head><title>TEMVER Servicios y construcciones</title></Head>
      <Navbar />
      <Badge />
      <WhoWeAre />
      <Galery />
      <Services />
      <Footer />
    </div>
  );
}
