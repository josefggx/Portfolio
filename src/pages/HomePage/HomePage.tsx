import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../../components/Footer/Footer';
import { HomeAboutPage } from '../HomeAboutPage/HomeAboutPage';
import { HomeContactPage } from '../HomeContactPage/HomeContactPage';
import { HomeHeroPage } from '../HomeHeroPage/HomeHeroPage';
import { HomeWorkPage } from '../HomeWorkPage/HomeWorkPage';

export const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <HomeHeroPage />
      <HomeAboutPage />
      <HomeWorkPage />
      <HomeContactPage />
      <Footer />
    </>
  );
};
