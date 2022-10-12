import { HeroFigure } from '../../components/HeroFigure/HeroFigure';
import './HomeHeroPage.scss';

export const HomeHeroPage = () => {
  return (
    <>
      <section id='home' className="section hero">
        <h1>Jose Gutierrez</h1>
        <HeroFigure />
      </section>
    </>
  );
};
