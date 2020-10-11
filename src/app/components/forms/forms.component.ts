import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  DataForm: FormGroup;
  Form_body:any[]=[];
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
    this.Form_body.push(this.DataForm.value);
    console.log(this.Form_body);
    this.dataservice.changeMessage(this.Form_body);
  }

}
