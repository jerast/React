import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, LoginPage, AboutPage, NotFoundPage } from './pages';
import { Navbar } from './components';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
	return (
		<UserProvider>
         <h1 className="title">MainApp</h1>
         <Navbar />
         <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            
            <Route path="*" element={ <NotFoundPage /> } />
            {/* <Route path="*" element={ <Navigate to="/about" /> } /> */}
         </Routes>
		</UserProvider>
	);
};
