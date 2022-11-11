import { Form } from '../../components/Form/Form';
import { Title } from '../../components/Title/Title';
import './HomeContactPage.scss';

export const HomeContactPage = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact__container">
        <Title title="Contact me" />
        <Form />
      </div>
    </section>
  );
};
