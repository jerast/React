import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './main.css';

// import { CounterApp } from './01-State/CounterApp'
// import { CounterWithCustomHook } from './01-State/CounterWithCustomHook';
// import { FormWithCustomHook } from './02-Effect/FormWithCustomHook';
// import { SimpleForm } from './02-Effect/SimpleForm';
// import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks';
// import { FocusScreen } from './04-Ref/FocusScreen';
// import { Layout } from './05-LayourEffect/Layout';
// import { Memorize } from './06-Memos/Memorize';
// import { MemoHook } from './06-Memos/MemoHook';
// import { CallbackHook } from './06-Memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-Reducer/TodoApp';
import { MainApp } from './09-Context/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		{/* <React.StrictMode> */}
			{/* <HooksApp /> */}
			{/* <CounterApp /> */}
			{/* <CounterWithCustomHook /> */}
			{/* <SimpleForm /> */}
			{/* <FormWithCustomHook /> */}
			{/* <MultipleCustomHooks /> */}
			{/* <FocusScreen /> */}
			{/* <Layout /> */}
			{/* <Memorize /> */}
			{/* <MemoHook /> */}
			{/* <CallbackHook /> */}
			{/* <Padre /> */}
			{/* <TodoApp /> */}
			<BrowserRouter>
				<MainApp />
			</BrowserRouter>
		{/* </React.StrictMode> */}
	</>
);
