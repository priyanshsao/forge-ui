import { Box } from '@radix-ui/themes';

// Todo: need to add resize feature.
const NavigationResize = function () {
	return (
		<Box
			width="2px"
			height="100%"
			position="absolute"
			right="0"
			className="bg-(--gray-6) hover:bg-(--gray-12) hover:cursor-col-resize"
		></Box>
	);
};

export { NavigationResize };
