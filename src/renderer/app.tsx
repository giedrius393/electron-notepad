import Main from './pages/Main/Main';
import { createRoot } from 'react-dom/client';

function render() {
  const root = createRoot(document.getElementById('app'));
  root.render(<Main />);
}

render();
