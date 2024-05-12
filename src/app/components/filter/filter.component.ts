import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  @Input()
  public advancedFiltersEnabled!: boolean;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      searchText: ['']
    });
  }

  search(): void {
    this.articleService.searchArticles(this.form.get('searchText')?.value );
  }
}
