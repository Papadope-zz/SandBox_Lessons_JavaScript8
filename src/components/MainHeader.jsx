import React from 'react';
import './MainHeader.css';

export const val = 33;

export function MainFooter(){
  return (
    <footer>FOOTER</footer>
  );
}

// Events: https://reactjs.org/docs/events.html#mouse-events
function handleClick(){
  console.log("Clicked!");
}

function MainHeader(){
  return (
    <header>
      <nav>
        <ul onClick={handleClick}>
          <li onClick={function(){ alert(); }}>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
