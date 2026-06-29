import { useState } from 'react';
import { Loader } from './components/dashboard/loader';
import type { LoaderProps } from './components/dashboard/loader';
import Dashboard from './components/dashboard/dashboard';

const App = function () {
	const [loading, setLoading] = useState(true);
	const [progressValue, setProgressValue] = useState(0);

	const loaderProps: LoaderProps = {
		size: '3',
		variant: 'surface',
		color: 'gray',
		duration: '2s',
		// value: progressValue,
		containerWidth: '300px',
		marginTop: '40px',
		updateValue: setProgressValue,
		updateState: setLoading,
	};

	return <>{loading ? <Loader {...loaderProps} /> : <Dashboard />}</>;
};

export { App };
