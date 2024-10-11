import React from 'react';

const Courses = ({ courses }) => {
  return (
    <section id="courses">
      <h2>Our Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
