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
            Hello! My name is José, and I'm a passionate Software developer from
            Colombia.
            <br />
            I'm in love with what I do since it combines creativity, logic, and
            problem-solving, and there's always something new to learn. Also,
            I'm passionate about human sciences and try to be a better person,
            friend, and colleague every day.
            <br />
            I'm committed to a philosophy of lifelong learning since I enjoy the
            feeling of discovering and improving. I've worked in management,
            finance, and technology. These experiences give me new perspectives
            that help me adapt to projects, understand the business logic and be a
            versatile and efficient developer.
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
