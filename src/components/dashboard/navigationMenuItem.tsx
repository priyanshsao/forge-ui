import type React from 'react';
import type { SetStateAction } from 'react';
import { Flex } from '@radix-ui/themes';
import { Tooltip } from '@radix-ui/themes';
import type { Dispatch } from 'react';

interface NavigationMenuItemProps {
	icon: any;
	tooltip: React.ReactNode;
	title?: string;
	active?: boolean;
	stateId: number;
	update: Dispatch<SetStateAction<boolean[]>>;
}

const NavigationMenuItem = function ({
	icon: Icon,
	tooltip,
	title,
	active = false,
	update,
	stateId,
}: NavigationMenuItemProps) {
	let className: string = 'border-l-6 ';

	if (active) {
		className += 'bg-(--gray-5) border-l-(--accent-10) ';
	} else {
		className +=
			'hover:bg-(--gray-4) border-transparent text-(--gray-12)/60 hover:text-(--gray-12) ';
	}

	return (
		<Tooltip content={tooltip} side="right">
			<Flex
				width="100%"
				height="fit-content"
				mt="8px"
				px="1"
				py="16px"
				justify="center"
				className={className}
				onClick={() =>
					update((prev) => prev.map((_, index) => index === stateId))
				}
			>
				<Icon size="32px" />
			</Flex>
		</Tooltip>
	);
};

export { NavigationMenuItem };
export type { NavigationMenuItemProps };
