import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// this file differs with internal, must use instead:
// import { AppModuleNgFactory } from './app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
//    .catch((err: any) => console.log(err));



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.log(err));
