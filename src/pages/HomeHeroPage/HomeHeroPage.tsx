import { Background } from '../../components/Background/Background';
import { HeroFigure } from '../../components/HeroFigure/HeroFigure';
import { ScrollIcon } from '../../components/ScrollIcon/ScrollIcon';
import './HomeHeroPage.scss';

export const HomeHeroPage = () => {
  return (
    <>
      <section id="home" className="section hero">
        <Background />
        <HeroFigure />
        <div className="hero__header">
          <h1 className="hero__title">José Gutiérrez</h1>
          <p className="hero__subtitle">SOFTWARE DEVELOPER</p>
        </div>
        <ScrollIcon />
      </section>
    </>
  );
};
