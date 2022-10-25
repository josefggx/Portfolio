import { TechStack } from '../../components/TechStack/TechStack';
import './HomeAboutPage.scss';

export const HomeAboutPage = () => {
  return (
    <section id="about" className="section about">
      <div className="about__container">
        <h1 className="about__title">
          About me<span>.</span>
        </h1>
        <div className="about__content">
          <div className="about__text">
            Amet fugiat adipisicing proident id commodo aute voluptate ad aute
            aliquip dolore aliqua. Lorem eu ea eiusmod in est quis non sint
            ipsum anim aliqua anim. Fugiat adipisicing cupidatat amet voluptate
            ex voluptate ullamco commodo officia sunt excepteur labore dolore.
            Enim eu pariatur amet qui.
            <br />
            <br /> Amet fugiat adipisicing proident id commodo aute voluptate ad
            aute aliquip dolore aliqua. Lorem eu ea eiusmod in est quis non sint
            ipsum anim aliqua anim. Fugiat adipisicing cupidatat amet voluptate
            ex voluptate ullamco commodo officia sunt excepteur labore dolore.
            Enim eu pariatur amet qui.
            <br />
            <br />
            <TechStack />
          </div>
          <div className="about__image"></div>
        </div>
      </div>
    </section>
  );
};
