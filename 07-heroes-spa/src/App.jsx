import { AuthProvider } from "./auth";
import { AppRoutes } from "./router/App.Routes"

export const App = () => {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
};
