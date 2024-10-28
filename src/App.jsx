import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import CTA from './components/CTA/CTA';
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
    }

    fetchData();

    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsSecondVisit(true);
    } else {
      localStorage.setItem('hasVisited', true);
    }
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='app'>
      <Navbar logo={data.navbar.logo} menuItems={data.navbar.menu} />
      <Hero 
        title={isSecondVisit ? data.hero.title.second_time_accessing : data.hero.title.first_time_accessing}
        subtitle={data.hero.subtitle}
        buttonLabel={isSecondVisit ? data.hero.button_label.second_time_accessing : data.hero.button_label.first_time_access}
        buttonLink={data.hero.bg_image}
        shapes={data.hero.shapes}
        isSecondVisit={isSecondVisit}
      />
      <Card title={data.body.title} posts={data.body.posts} />
      <CTA 
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        inputPlaceholder={data.cta.input_placeholder}
        inputButton={data.cta.input_button}
        checkboxText={data.cta.checkbox_text}
      />
    </div>
  )
}

export default App;
