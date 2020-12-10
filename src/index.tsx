import { FC } from 'react';
import { render } from 'react-dom';
import Home from '@pages/Home';

const App: FC = () => <Home />;

render(<App />, document.querySelector('#root'));
