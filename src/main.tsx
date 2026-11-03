import { createRoot } from 'react-dom/client';
import App from './App';
import { swarmEnabled } from './swarm/useSwarm';
import './styles.css';

// Sembunyikan elemen [data-build] sebelum render pertama supaya tidak "berkedip".
if (swarmEnabled) document.documentElement.classList.add('swarm');

createRoot(document.getElementById('root')!).render(<App />);
