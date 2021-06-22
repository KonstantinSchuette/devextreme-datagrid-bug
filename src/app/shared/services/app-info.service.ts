import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Devextreme Datagrid Bug';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
