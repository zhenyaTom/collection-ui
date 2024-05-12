import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService, ArticleVO } from '../../services/article.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './articles-table.component.html',
  styleUrl: './articles-table.component.scss'
})
export class ArticlesTableComponent implements OnInit, OnDestroy {

  protected readonly Array = Array;

  monthYearToArticlesMap: Map<Date, ArticleVO[]> = new Map<Date, ArticleVO[]>;
  private destroy$ = new Subject<void>();

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.loadArticles();
    this.articleService.loadedArticles$.pipe(takeUntil(this.destroy$)).subscribe((articles: ArticleVO[]) => {
      this.monthYearToArticlesMap = this.groupArticlesByMonth(articles);
    });
  }

  private groupArticlesByMonth(articles: ArticleVO[]): Map<Date, ArticleVO[]> {
    const result: Map<Date, ArticleVO[]> = new Map<Date, ArticleVO[]>;
    if (!articles) {
      return result;
    }
    articles.sort((a: ArticleVO, b: ArticleVO) => a.dateStart.getTime() - b.dateStart.getTime());
    for (const article of articles) {
      let articleAdded: boolean = false;
      const month: Date = new Date(article.dateStart.getMonth(), article.dateStart.getMonth());
      for (const key of Array.from(result.keys())) {
        if (!articleAdded && (key.getFullYear() === month.getFullYear() && key.getMonth() === month.getMonth())) {
          result.get(key)?.push(article);
          articleAdded = true;
        }
      }
      if (!articleAdded) {
        result.set(month, [article]);
      }
    }
    return result;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
