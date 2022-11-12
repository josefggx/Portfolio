
import { Footer } from '../../components/Footer/Footer';
import { HomeAboutPage } from '../HomeAboutPage/HomeAboutPage';
import { HomeContactPage } from '../HomeContactPage/HomeContactPage';
import { HomeHeroPage } from '../HomeHeroPage/HomeHeroPage';
import { HomeWorkPage } from '../HomeWorkPage/HomeWorkPage';

export const HomePage = () => {
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
