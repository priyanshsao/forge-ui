import { useLayoutEffect, useRef, useState, type RefObject } from 'react';

import { Box } from '@radix-ui/themes';
import { NavigationMenuItem } from './navigationMenuItem';
import { NavigationResize } from './navigationResize';
import { NavigationData } from './navigation';

const calWidth = function (ref: RefObject<HTMLElement | null>): string {
  return String(ref.current?.getBoundingClientRect().width) + 'px';
};

export const NavigationMenu = function () {
  // NavItem active state variable.
  const [activeStates, setActiveStates] = useState([true, false, false, false]);
  // Navigation Open/closed state variable.
  const [navigationState, setNavigationState] = useState(false);
  // Width for navigation in open state.
  const [navWidth, setNavWidth] = useState('88px');

  // ref for navgation container.
  const navContainerRef = useRef<HTMLDivElement>(null);
  // stores width of navigation panel.
  let width: string;

  // when done creating DOM calculate the width of container nav and
  // set it to state variable.
  useLayoutEffect(() => setNavWidth(calWidth(navContainerRef)), [navigationState]);

  navigationState ? (width = navWidth) : (width = '88px');

  return (
    <Box
      width={width}
      height="100%"
      position="relative"
      overflow="hidden"
      className="bg-(--gray-2) transition-all  duration-200 ease-in-out">
      <NavigationResize state={navigationState} update={setNavigationState} />
      <Box ref={navContainerRef} width="fit-content" height="100%" minHeight="fit-content" py="8">
        {NavigationData.map((data, index) => (
          <NavigationMenuItem
            {...data}
            key={index}
            navState={navigationState}
            stateId={index}
            active={activeStates[index]}
            update={setActiveStates}
          />
        ))}
      </Box>
    </Box>
  );
};
