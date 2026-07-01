import { GoDatabase } from 'react-icons/go';
import { GoContainer } from 'react-icons/go';
import { GoCopilot } from 'react-icons/go';
import { GoCodespaces } from 'react-icons/go';

const NavigationData = [
  {
    title: 'Dashboard',
    icon: GoDatabase,
    tooltip: 'Database',
  },
  {
    title: 'Containers',
    icon: GoContainer,
    tooltip: 'Container',
  },
  {
    title: 'Github copiolet',
    icon: GoCopilot,
    tooltip: 'Copilot',
  },
  {
    title: 'Vs codespaces',
    icon: GoCodespaces,
    tooltip: 'Codespaces',
  },
];

export { NavigationData };
