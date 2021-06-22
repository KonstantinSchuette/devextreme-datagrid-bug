import { Component } from '@angular/core';
import {ColumnModel} from "../../shared/models/column.model";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  columns: Array<ColumnModel>;
  tableData: Array<any>;
  constructor() {
    this.columns = [
      {
        dataField: 'name',
        caption: 'Name',
      },
      {
        dataField: 'test',
        caption: 'Test',
      },
    ];

    this.tableData = [
      {
        name: 'test1',
        test: 'test1'
      },{
        name: 'test2',
        test: 'test2'
      }
    ]
  }
}
