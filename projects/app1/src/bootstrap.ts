import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App1Module } from './app/app.module';


platformBrowserDynamic().bootstrapModule(App1Module)
  .catch(err => console.error(err));
