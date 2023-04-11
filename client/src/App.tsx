import React from 'react';
import 'App.styles.scss';
import { About, Footer, Header, Navbar, Projects, Skills } from './templates';

const App = () => {
  return (
    <div className="theme-light">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
