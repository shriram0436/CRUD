import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {MatTableDataSource} from '@angular/material/table';

export interface MyData {
  name: string;
  lastname: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DataForm: FormGroup;
  DataUpdateForm: FormGroup;
  Form_body:any[]=[];
  displayedColumns: string[] = ['name', 'lastname', 'age','address','actions'];
  dataSource:any=[];
  hide_form=false;
  view_data;
  update_data=false;
  update_id;
  constructor(private userFB: FormBuilder, private ref:ChangeDetectorRef,private dataservice: DataService) { }

  ngOnInit() {
    this.DataForm = this.userFB.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: [''],
      age: ['',Validators.required]
    });
  }

  SaveDetails(){
    console.log(this.DataForm.value);
    for(let i in this.DataForm.controls){
      this.DataForm.controls[i].markAsTouched();
    }
    if(this.DataForm.invalid)
    {
      console.log(this.DataForm);
      return false;
    }
    let id=this.Form_body.length;
    this.Form_body.push(
      {
        "id":id,
        "name":this.DataForm.value.name,
        "lastname": this.DataForm.value.lastname,
        "address": this.DataForm.value.address,
        "age": this.DataForm.value.age
      });
    console.log(this.Form_body);
    if(this.Form_body.length==10){
        this.hide_form=true;
    }
    this.dataSource = new MatTableDataSource(this.Form_body);
  }
  //delete
  onDelete(id){
    console.log(id);
    this.Form_body.splice(id, 1);
    this.dataSource = new MatTableDataSource(this.Form_body);
    this.view_data=null;
  }
  //on View
  onview(value){
    this.view_data=value;
  }
  //onEdit
  onEdit(value){
    console.log(value);
    this.update_data=true;
    this.update_id=value.id;
    this.DataUpdateForm = this.userFB.group({
      name: new FormControl(value.name, [Validators.required]),
      lastname: new FormControl(value.lastname, [Validators.required]),
      address: new FormControl(value.address, []),
      age: new FormControl(value.age, []),
    });
  }
  UpdateDetails(){
    console.log(this.DataUpdateForm.value);
    console.log(this.Form_body);
    this.Form_body[this.update_id]=this.DataUpdateForm.value;
    this.dataSource = new MatTableDataSource(this.Form_body);
    this.update_data=false;
  }
}
