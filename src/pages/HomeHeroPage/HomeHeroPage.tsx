import { HeroFigure } from '../../components/HeroFigure/HeroFigure';
import './HomeHeroPage.scss';

export const HomeHeroPage = () => {
  return (
    <>
      <section id="home" className="section hero">
        <HeroFigure />
        <div className="hero__header">
          <h1 className="hero__title">Jose Gutierrez</h1>
          <p className="hero__subtitle">FRONTEND DEVELOPER</p>
        </div>
      </section>
    </>
  );
};
