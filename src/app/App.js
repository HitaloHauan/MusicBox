import React from 'react'
import '../styles/index.css'
import Content from './main/content/Content';
import Navigation from './main/nav/Navigation';
import RightContent from './main/rigthcontent/RightContent';

function App() {
  return (
    <div id='App' className='flex flex-row h-screen justify-between'>
      <Navigation/>
      <Content/>
      <RightContent/>
    </div>
  );
}

export default App;
