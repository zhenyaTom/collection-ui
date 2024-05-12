import { Component, Input } from '@angular/core';
import { ArticleType, ArticleVO } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input()
  public article: ArticleVO;

  getArticleTypeDisplayValue(type: ArticleType): string {
    return type.name;
  }

  getArticleClassByType(type: ArticleType): string {
    switch (type.name) {
      case 'Рэкалекцыi':
        return 'recollection';
      case 'Пiлiгрымка':
        return 'piligrimka';
      case 'Фармацыя':
        return 'farmation';
      case 'Сустрэча':
        return 'meet';
      case 'Семiнар, лекцыя':
        return 'seminar';
      case 'Урачыстаць, фэст':
        return 'fest';
      case 'Чуванне, адарацыя':
        return 'adaration';
      case 'Рэгулярнаe спатканне':
        return 'regularMeet';
      default:
        return 'meet';
    }
  }
}
