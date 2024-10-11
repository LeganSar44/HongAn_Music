// App.js
import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import './styles/App.css';
import './index.css';

const coursesData = [
  { id: 1, title: 'Violin for Beginners', description: 'Learn the basics of violin playing.' },
  { id: 2, title: 'Advanced Violin Techniques', description: 'Master advanced techniques.' }
];

const productsData = [
  { id: 1, title: 'Violin A', description: 'High-quality violin for beginners.', price: '$300' },
  { id: 2, title: 'Violin B', description: 'Professional violin for advanced players.', price: '$1000' }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Courses courses={coursesData} />
      <Products products={productsData} />
      <ContactForm />
    </div>
  );
}

export default App;
