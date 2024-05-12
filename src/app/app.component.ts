import { Component, OnInit } from '@angular/core';
import { AppTranslateService } from './translate/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private translateService: AppTranslateService) {
  }

  ngOnInit() {
    this.translateService.initLang();
  }
}
