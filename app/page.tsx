// pages/home.tsx or components/Home.tsx

import About from '@/components/about/About';
import Dest from '@/components/dest/Dest';
import Galery from '@/components/galery/Galery';
import Hero from '@/components/hero/Hero'
import Info from '@/components/info/Info';
import Slider from '@/components/slider/Slider';
import { getAllTours } from '@/utils/actions';

const Home = async() => {
  const tours = await getAllTours();
  

 

  return (
    <div>
 <Hero />
 <Info />
 <Slider tours={tours} />
 <Dest />
 <About />
 <Galery />
    </div>
  );
};

export default Home;
