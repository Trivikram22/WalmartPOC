import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://localhost:3000">walmart</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

 describe('<App />',()=>{
   it('render1 <App /> component',() => {
       const component=shallow(<APP/>);
       expect(component).toHaveLength(1);
   });
 });