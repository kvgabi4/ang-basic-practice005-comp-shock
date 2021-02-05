import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() data: User = new User();
  @Input() key: string = 'name';


  // @Input() set price(value: number) {
  //   if (typeof value === 'number') {
  //     this.localePrice = value * 1.27;
  //   }
  // }
  // localePrice: number = 0;


  constructor() {
    // console.log('dataCell', this.key);
    // console.log('dataCell', this.data);
    // console.log('dataCell', this.data[this.key]);
    // console.log('dataCell', this.data.id);
  }

  ngOnInit(): void {
  }

}
