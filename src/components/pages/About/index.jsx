import React from 'react'

function About (props) {
  
  return (
    <div>
      <h1>About</h1>
      <h2>Мои ключевые навыки:</h2>
      {
        "<Кобзев Александр>{React,  JS: {ES6+}, HTML, CSS: {SCSS, Grid, Flex}, GIT, Figma, ...Я}</Кобзев Александр>"
      }
    </div>
  );
}

export default About;