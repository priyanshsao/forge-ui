import { Flex } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import { Progress } from '@radix-ui/themes';
import type { ProgressProps } from '@radix-ui/themes';
import type { Dispatch, SetStateAction } from 'react';

interface LoaderProps extends ProgressProps {
	className?: string;
	containerWidth?: string;
	marginTop?: string;
	updateValue: Dispatch<SetStateAction<number>>;
	updateState: Dispatch<SetStateAction<boolean>>;
}

const Loader = function ({
	size = '2',
	variant = 'classic',
	value,
	color,
	highContrast = false,
	radius = 'medium',
	duration,
	className,
	containerWidth = '300px',
	marginTop = '4px',
	updateValue,
	updateState,
}: LoaderProps) {
	// Todo: need to add tooltip.
	return (
		<Flex
			direction="column"
			width="100%"
			height="100vh"
			justify="center"
			align="center"
		>
			<img src="./src/assets/hero.png" alt="" className="size-50" />
			<Box width={containerWidth} mt={marginTop} className={className}>
				<Progress
					value={value}
					size={size}
					variant={variant}
					color={color}
					highContrast={highContrast}
					radius={radius}
					duration={duration}
				/>
			</Box>
			<button
				className="z-1 absolute left-0 top-0"
				onClick={() => updateState(true)}
			>
				start
			</button>
			<button
				className="z-1 absolute right-0 top-0"
				onClick={() => updateState(false)}
			>
				stop
			</button>
		</Flex>
	);
};

export { Loader };
export type { LoaderProps };
