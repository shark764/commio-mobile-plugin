import { registerPlugin } from '@capacitor/core';

import type { CommioMobilePlugin } from './definitions';

const CommioMobile = registerPlugin<CommioMobilePlugin>('CommioMobile', {
  web: () => import('./web').then(m => new m.CommioMobileWeb()),
});

export * from './definitions';
export { CommioMobile };
