import { Flex } from '@radix-ui/themes';

import { Statusbar } from './statusbar';
import { Content } from './content';

export default function Dashboard() {
  return (
    // dialogs
    <>
      <Flex direction="column" height="100vh" width="100%">
        <Content />
        <Statusbar />
      </Flex>
    </>
  );
}
