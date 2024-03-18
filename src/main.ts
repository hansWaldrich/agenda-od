import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/core/core.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
