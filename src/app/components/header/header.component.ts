import { Component } from '@angular/core';

export enum ViewType {
  table = 'table',
  list = 'list',
  map = 'map',
  calendar = 'calendar',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public advancedFiltersEnabled: boolean = false;
  public availableViewTypes: ViewType[] = [ViewType.table, ViewType.list, ViewType.map, ViewType.calendar];
  public currentViewType: ViewType = ViewType.list;

  toggleAdvancedFilters(): void {
    this.advancedFiltersEnabled = !this.advancedFiltersEnabled;
  }

  protected readonly ViewType = ViewType;
}
