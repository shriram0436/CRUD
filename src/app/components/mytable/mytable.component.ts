import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../../services/data.service';

export interface MyData {
  name: string;
  lastname: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {
  message:any;
  displayedColumns: string[] = ['name', 'lastname', 'age','address'];
  dataSource:any=[];
  constructor(private dataservice: DataService,private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataservice.currentMessage.subscribe(message => {
      console.log(message);
      this.dataSource=message;
    });
  }

}
