import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export const createTranslateLoader = (
  http: HttpClient
): MultiTranslateHttpLoader =>
  new MultiTranslateHttpLoader(http, [
    { prefix: `./assets/i18n/`, suffix: '.json' },
  ]);
