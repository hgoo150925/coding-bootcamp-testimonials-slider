import { useState } from 'react';

import { people } from './data';

import prevIcon from './assets/images/icon-prev.svg';
import nextIcon from './assets/images/icon-next.svg';
import bg from './assets/images/pattern-bg.svg';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkPerson = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkPerson(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkPerson(newIndex);
    });
  };

  return (
    <section className="slide">
      <div className="container__image">
        <img className="photo" src={image} alt={name} />
        <img className="bg" src={bg} alt="bg" />
        <div className="button-next-prev">
          <a onClick={prevPerson}>
            <img className="prev" src={prevIcon} alt="prev-icon" />
          </a>
          <a onClick={nextPerson}>
            <img className="next" src={nextIcon} alt="next-icon" />
          </a>
        </div>
      </div>

      <div className="container__description">
        <p className="description">{text}</p>
        <p className="position">
          <span className="name">{name}</span>
          <span className="job">{job}</span>
        </p>
      </div>
    </section>
  );
};
