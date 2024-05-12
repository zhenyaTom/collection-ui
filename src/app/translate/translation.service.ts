import { EventEmitter, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core/lib/translate.service';

type insideWords = 'insideWords';
interface wordInfo {
  word?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {
  public readonly DEFAULT_LANGUAGE: string = 'be';

  currentLang: string = this.DEFAULT_LANGUAGE;
  localStorageLanguageKey = 'language';
  get localStorageLanguage(): string {
    return localStorage.getItem(this.localStorageLanguageKey) || this.DEFAULT_LANGUAGE;
  }

  get onLangChange(): EventEmitter<LangChangeEvent> {
    return this.translateService.onLangChange;
  }

  constructor(private readonly translateService: TranslateService) {}

  initLang(): void {
    const initialLang =
      this.localStorageLanguage || this.translateService.getBrowserLang() || this.DEFAULT_LANGUAGE;
    this.translateService.use(initialLang);
    this.currentLang = initialLang;
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  setCurrentLanguage(selectedLang: string): void {
    this.translateService.use(selectedLang);
    localStorage.setItem(this.localStorageLanguageKey, selectedLang);
    this.currentLang = selectedLang;
  }

  switchTranslationLanguage(): void {
    const currentLang = this.translateService.currentLang;
    this.translateService.currentLang = '';
    this.translateService.use(currentLang);
  }

  instant(
    key: string[] | string,
    interpolateParams?: Record<insideWords, wordInfo>
  ): string {
    return this.translateService.instant(key, interpolateParams) as string;
  }
}
