import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


export interface ArticleVO {
  id: number;
  name: string;
  description: string;
  type: ArticleType;
  dateStart: Date;
  dateEnd?: Date;
  tags?: string[];
}

export interface ArticleType {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private mockArticles: ArticleVO[] = [
    {
      id: 1,
      name: 'Рэкалекцыі для дзяўчат 16+ у Мінску',
      description: 'Сёстры дамініканкі запрашаюць дзяўчат ва ўзросце ад 16 да 30 гадоў на сустрэчу, якая пройдзе ў Мінску 24–26 мая. Тэма сустрэчы — «Цішыня прамаўляе да нас».',
      type: {
        name: 'Рэкалекцыi',
        description: 'Реколлекции (от лат. recolligere - вновь собирать) - это особый период, посвящённый личной молитве, размышлению, принятию решений.'
      },
      dateStart: new Date(2024, 4, 13),
      tags: ['Мінск', 'Дзяўчаты', 'Дамініканкі']
    },
    {
      id: 2,
      name: 'Сустрэча моладзі на заканчэнне навучальнага года',
      description: 'У суботу 25 мая ў Копішчы (Новая Баравая) адбудзецца інтэграцыйная сустрэча для моладзі на заканчэнне навучальнага года. На сустрэчы моладзь чакае мноства гульняў і забаў, смачны пасілак, супольная малітва з падзякай Богу за гэты год і каштоўны час, праведзены з сябрамі і новымі знаёмымі.',
      type: {
        name: 'Сустрэча',
        description: 'Што такое Сустрэча'
      },
      dateStart: new Date(2024, 4, 14),
      tags: ['Мінск', 'Моладзь', 'Капуцыны']
    },
    {
      id: 3,
      name: 'Начное чуванне перад Насвяцейшым Сакрамэнтам',
      description: 'Моладзь гродненскіх парафій запрашае далучыцца да начнога чування перад Насвяцейшым Сакрамэнтам у цішыні. Малітва праводзіцца у інтэнцыі перапрашэння за грахі свету і грамадства.',
      type: {
        name: 'Чуванне, адарацыя',
        description: 'Што азначае слова “адарацыя”? Гэтым словам мы называем аддаванне пашаны Хрысту, прысутнаму ў постаці Эўхарыстычнага хлеба.'
      },
      dateStart: new Date(2024, 4, 16),
      tags: ['Гродна', 'Моладзь']
    },
    {
      id: 4,
      name: 'Форум на тэму душпастырства моладзi',
      description: 'У Мінску пройдзе каталіцкі моладзевы форум Мінска-Магілёўскай архідыяцэзіі, дзе юнакі і дзяўчаты разам са сваімі душпастырамі будуць разважаць над пытаннямі душпастырства моладзі і дзяліцца вопытам.',
      type: {
        name: 'Семiнар, лекцыя',
        description: 'Лекция – это вид обучения, при котором преподаватель устно рассказывает свой предмет, а студенты слушают и дополнительно конспектируют услышанную информацию. Семинар представляет собой выступление с докладами - учащиеся их читают, комментируют и обсуждают в течение всей пары.'
      },
      dateStart: new Date(2024, 4, 18),
      tags: ['Мінск', 'Моладзь', 'Душпастырства']
    },
    {
      id: 5,
      name: 'Фармацыйныя рэкалекцыі для моладзі “Spoleto”',
      description: 'Запрашаем моладзь ад 16 год на фармацыйныя рэкалекцыі, якія будуць праводзіцца братамі капуцынамі.',
      type: {
        name: 'Фармацыя',
        description: 'Што такое Фармацыя'
      },
      dateStart: new Date(2024, 4, 21),
      dateEnd: new Date(2024, 4, 29),
      tags: ['Росіца', 'Моладзь', 'Капуцыны']
    },
    {
      id: 6,
      name: 'Росіцкі санктуарый запрашае пілігрымаў на летнія ўрачыстасці',
      description: 'У Росіцкім санктуарыі Віцебскай дыяцэзіі адбудуцца ўрачыстасці ў гонар благаслаўлёных Антонія Ляшчэвіча і Юрыя Кашыры, святароў марыянаў.',
      type: {
        name: 'Урачыстаць, фэст',
        description: 'Штогадовае свята'
      },
      dateStart: new Date(2024, 4, 31),
      dateEnd: new Date(2024, 5, 1),
      tags: ['Росіца', 'Біскуп']
    },
    {
      id: 7,
      name: 'Спатканне малітоўнай супольнасці Сіён',
      description: 'Кожную сераду запрашаем на разважанне Слова Божага (Стары Запавет, Псальмы), працягласць - прыкладна 1,5 гадзіны.',
      type: {
        name: 'Рэгулярнаe спатканне',
        description: 'Спатканне — адна з формаў сацыяльнага ўзаемадзеяння'
      },
      dateStart: new Date(2024, 5, 12),
      tags: ['Мінск', 'Для дарослых', 'Супольнасць']
    },
    {
      id: 8,
      name: 'Разам з Марыяй у Будслаў на раварах',
      description: 'Роварная пілігрымка ў Будслаў.',
      type: {
        name: 'Пiлiгрымка',
        description: 'Што такое Пiлiгрымка'
      },
      dateStart: new Date(2024, 5, 3),
      dateEnd: new Date(2024, 5, 9),
      tags: ['Будслаў']
    }
  ];

  public loadedArticles$: BehaviorSubject<ArticleVO[]> = new BehaviorSubject<ArticleVO[]>([]);

  constructor() { }

  public loadArticles(): void {
    setTimeout(() => {
      this.loadedArticles$.next(this.mockArticles);
    });
  }

  public searchArticles(searchText: string): void {
    if (searchText) {
      const filteredArticles: ArticleVO[] = this.mockArticles.filter((article: ArticleVO) => {
        return article.name.toLowerCase().includes(searchText.toLowerCase());
      })
      setTimeout(() => {
        this.loadedArticles$.next(filteredArticles);
      });
    } else {
      this.loadArticles();
    }
  }
}
