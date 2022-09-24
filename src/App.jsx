import { useState } from 'react';

import { people } from './data';

function App() {
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
    <div className="container">
      <div className="container__info">
        <img src={image} alt={name} />
        <p>{text}</p>
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
      <button onClick={prevPerson}>prev</button>
      <button onClick={nextPerson}>next</button>
    </div>
  );
}

export default App;
