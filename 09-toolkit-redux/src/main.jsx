import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/store';
import './main.css';
import { /* CounterApp, PokemonApp, */ TodoApp } from '@/app';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<Provider store={ store }>
			{/* <CounterApp /> */}
			{/* <PokemonApp /> */}
			<TodoApp />
		</Provider>
	// </React.StrictMode>
);
