import { AppRoutes } from '@/router';
import { AppTheme } from '@/theme';

export const App = () => {
	return (
		<>
			<AppTheme>
				<AppRoutes />
			</AppTheme>
		</>
	);
};
