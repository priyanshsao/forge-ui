import { Box } from '@radix-ui/themes';

interface NavigationResizeProps {
	state: boolean;
	update: (value: boolean) => void;
}

// Todo: need to add resize feature.
const NavigationResize = function ({ state, update }: NavigationResizeProps) {
	return (
		<Box
			width="2px"
			height="100%"
			position="absolute"
			right="0"
			className="bg-(--gray-6) hover:bg-(--gray-12) hover:cursor-col-resize"
			onClick={() => update(!state)}
		></Box>
	);
};

export { NavigationResize };
export type { NavigationResizeProps };
