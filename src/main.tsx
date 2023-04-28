import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles/index.css';

const app = (
	<StrictMode>
		<h1>Esteban Salazar</h1>
		<img src='/vite.svg' alt='Vite logo' />
	</StrictMode>
);
const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(app);
