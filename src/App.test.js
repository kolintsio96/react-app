import React from 'react';
import ReactDOM from 'react-dom';
import SocialApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
