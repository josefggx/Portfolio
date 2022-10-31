import { useState } from 'react';
import { experienceData as jobs } from '../../utils/experienceData';
import './Experience.scss';

export const Experience = () => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title, type } = jobs[value];

  return (
    <>
      <div className="experience__container">
        <div className="experience__btnContainer">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`experience__btn ${
                  index === value && 'experience__btn--active'
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience__info">
          <h3>{title}</h3>
          <h4>
            {type == 'Job' ? (
              <i className="fa-solid fa-briefcase"></i>
            ) : (
              <i className="fa-solid fa-graduation-cap"></i>
            )}{' '}
            {company}
          </h4>
          <p className="experience__date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <ul key={index} className="experience__desc">
                <li>{duty}</li>
              </ul>
            );
          })}
        </article>
      </div>
    </>
  );
};
