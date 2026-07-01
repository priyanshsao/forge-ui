import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css'; // radix themes CSS.
import './index.css'; // tailwind CSS.

import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="plum" grayColor="gray" appearance="dark">
      <App />
    </Theme>
  </StrictMode>,
);
