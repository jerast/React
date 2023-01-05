import { AuthProvider } from "@auth";
import { AppRoutes } from "@router"

export const App = () => {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
};
