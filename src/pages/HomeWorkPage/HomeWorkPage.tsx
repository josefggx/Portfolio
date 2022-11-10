import { Button } from '../../components/Button/Button';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Title } from '../../components/Title/Title';
import './HomeWorkPage.scss';

export const HomeWorkPage = () => {
  return (
    <section id="work" className="section work">
      <div className="work__container">
        <Title title="Latest Work" />
        <ProjectCard />
        <Button
          onClick={() => {
            window.open('https://github.com/josefggx', '_blank');
          }}
          text="Github"
        />
      </div>
    </section>
  );
};
