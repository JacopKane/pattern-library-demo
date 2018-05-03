import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from '@chantelle/button'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
