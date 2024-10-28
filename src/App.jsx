import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CardSection from './components/Card/Card';
import './styles/main.scss';

const App = () => {
  const [data, setData] = useState(null);
  const [isSecondVisit, setIsSecondVisit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://tf-frontend.netlify.app/trial');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsSecondVisit(true);
    }
  }, []);

  useEffect(() => {
    if (!isSecondVisit) {
      const timer = setTimeout(() => {
        localStorage.setItem('hasVisited', 'true');
        setIsSecondVisit(true);
      }, 5000); // Set to first visit for 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isSecondVisit]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Navbar logo={data.navbar.logo} menuItems={data.navbar.menu} />
      <Hero
        title={isSecondVisit ? data.hero.title.second_time_accessing : data.hero.title.first_time_accessing}
        subtitle={data.hero.subtitle}
        buttonLabel={isSecondVisit ? data.hero.button_label.second_time_accessing : data.hero.button_label.first_time_accessing}
        buttonLink={data.hero.button_link}
        bgImage={data.hero.bg_image}
        shapes={data.hero.shapes}
        isSecondVisit={isSecondVisit}
      />
      <CardSection title={data.body.title} posts={data.body.posts} buttonLabel={data.body.button_label} buttonLink={data.body.button_link} />
    </>
  );
};

export default App;