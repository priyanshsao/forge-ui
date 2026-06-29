import { useState } from 'react';

import { Box } from '@radix-ui/themes';
import { NavigationMenuItem } from './navigationMenuItem';
import type { NavigationMenuItemProps } from './navigationMenuItem';
import { NavigationResize } from './navigationResize';

import { GoDatabase } from 'react-icons/go';
import { GoContainer } from 'react-icons/go';
import { GoCopilot } from 'react-icons/go';
import { GoCodespaces } from 'react-icons/go';

export const NavigationMenu = function () {
	const [activeStates, setActiveStates] = useState([
		true,
		false,
		false,
		false,
	]);

	let navigationData: NavigationMenuItemProps[] = [
		{
			icon: GoDatabase,
			tooltip: 'Database',
			active: activeStates[0],
			stateId: 0,
			update: setActiveStates,
		},
		{
			icon: GoContainer,
			tooltip: 'Container',
			active: activeStates[1],
			stateId: 1,
			update: setActiveStates,
		},
		{
			icon: GoCopilot,
			tooltip: 'Copilot',
			active: activeStates[2],
			stateId: 2,
			update: setActiveStates,
		},
		{
			icon: GoCodespaces,
			tooltip: 'Codespaces',
			active: activeStates[3],
			stateId: 3,
			update: setActiveStates,
		},
	];

	return (
		<Box width="76px" height="100%" position="relative">
			<NavigationResize />
			<Box
				width="100%"
				height="100%"
				minHeight="fit-content"
				py="8"
				overflowY="auto"
			>
				<NavigationMenuItem {...navigationData[0]} />
				<NavigationMenuItem {...navigationData[1]} />
				<NavigationMenuItem {...navigationData[2]} />
				<NavigationMenuItem {...navigationData[3]} />
			</Box>
		</Box>
	);
};
