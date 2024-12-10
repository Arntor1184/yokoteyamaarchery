import React from 'react';
import './Lessons.css';

const Lessons = () => {
  return (
    <section id="lessons">
      <h2>Archery Lessons</h2>
      <p>We offer archery lessons with our experts every day of the week.</p>
      <dl>
        <dt className="price">Price</dt>
        <dd>$25 per lesson per person.</dd>
        <p>Lessons do not have a set time limit, they could go for 20 minutes or last well into the night.</p>
      </dl>
    </section>
  );
};

export default Lessons;
