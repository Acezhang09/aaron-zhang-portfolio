import * as React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
}
