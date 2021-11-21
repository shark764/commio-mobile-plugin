import { WebPlugin } from '@capacitor/core';

import type { CommioMobilePlugin } from './definitions';

export class CommioMobileWeb extends WebPlugin implements CommioMobilePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
