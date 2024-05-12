import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './translate/translate-loader.factory';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdmintoolComponent } from './components/admintool/admintool.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesTableComponent } from './components/articles-table/articles-table.component';
import { ArticleComponent } from './components/article/article.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LocalizedDatePipe } from './components/pipes/localized-date.pipe';
import { registerLocaleData } from '@angular/common';
import localeBE from '@angular/common/locales/be';
import localeRU from '@angular/common/locales/ru';
import localePL from '@angular/common/locales/pl';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(localeBE);
registerLocaleData(localeRU);
registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdmintoolComponent,
    HeaderComponent,
    FilterComponent,
    ArticlesTableComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => createTranslateLoader(http),
        deps: [HttpClient]
      },
      isolate: false
    }),
    ReactiveFormsModule,
    NgScrollbarModule,
    LocalizedDatePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
