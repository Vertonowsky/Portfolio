import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Language } from './language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_COOKIE = 'language';

  constructor(private translate: TranslateService, private cookieService: CookieService) {
    translate.addLangs([Language.ENGLISH, Language.POLISH]);
    translate.setDefaultLang(Language.ENGLISH);

    const browserLang = translate.getBrowserLang();
    const lang : Language = browserLang === 'pl' ? Language.POLISH : Language.ENGLISH;
    const cookieLanguage = this.cookieService.get(this.LANGUAGE_COOKIE) as Language;

    this.setLanguage(cookieLanguage ? cookieLanguage : lang);
  }

  setLanguage(language: Language) {
    this.cookieService.set(this.LANGUAGE_COOKIE, language, { expires: 365 });
    this.translate.use(language);
  }

  getLanguage(): Language {
    return this.translate.currentLang as Language;
  }
}
