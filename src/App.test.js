import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from 'react-toolbox/lib/button';

ReactDOM.render(
  <Button label="Hello World!" />,
  document.getElementById('app')
);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
