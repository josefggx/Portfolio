import { Link } from 'react-router-dom';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { Experience } from '../../components/Experience/Experience';
import { TechStack } from '../../components/TechStack/TechStack';
import { Title } from '../../components/Title/Title';
import './HomeAboutPage.scss';

export const HomeAboutPage = () => {
  const onClickResume = () => {
    window.open('resume-josegutierrez.pdf', '_blank');
  };

  return (
    <section id="about" className="section about">
      <div className="about__container">
        <Title title="About me" />
        <div className="about__content">
          <div className="about__text">
            Amet fugiat adipisicing proident id commodo aute voluptate ad aute
            aliquip dolore aliqua. Lorem eu ea eiusmod in est quis non sint
            ipsum anim aliqua anim. Fugiat adipisicing cupidatat amet voluptate
            ex voluptate ullamco commodo officia sunt excepteur labore dolore.
            Enim eu pariatur amet qui. Fugiat adipisicing cupidatat amet
            voluptate ex voluptate ullamco commodo officia sunt excepteur labore
            dolore. Enim eu pariatur amet qui. Fugiat adipisicing cupidatat amet
            voluptate ex voluptate ullamco commodo officia sunt excepteur labore
            dolore. Enim eu pariatur amet qui.
            <br />
            <br />
            <h2 className="item__title">Tech Stack</h2>
            <TechStack />
            {/* <br /> */}
          </div>
          <div className="about__info">
            <div className="about__image">
              <Avatar />
              {/* <img src="/src/assets/nice-avatar.png" alt="avatar" /> */}
            </div>
            <Button onClick={onClickResume} text="Resume" />
            <div className="about__links">
              <a href="http://www.github.com" target="_blank">
                <span>
                  <i className="fa-brands fa-github"></i>
                </span>
              </a>
              <a href="http://www.linkedin.com" target="_blank">
                <span>
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
              <a href="http://www.linkedin.com" target="_blank">
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* <Title title='Experience' /> */}
        <h2 className="experience__title">Experience & Education</h2>
        <Experience />
      </div>
    </section>
  );
};
