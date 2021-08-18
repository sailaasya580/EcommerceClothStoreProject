import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empupdate',
  templateUrl: './empupdate.component.html',
  styleUrls: ['./empupdate.component.css']
})
export class EmpupdateComponent implements OnInit {
  emprform:FormGroup;
  id:number;
  constructor(ar:ActivatedRoute,private es:EmpService,fb:FormBuilder) {
    this.id=ar.snapshot.params.id;
   /* this.emprform=new FormGroup({
      eid:new FormControl(),
      eName:new FormControl('',Validators.required),
      eSal:new FormControl()
    });*/
    this.emprform=fb.group({
      eid:[],
      eName:['',Validators.required],
      eSal:[]
    });
    es.getEmp(this.id).subscribe(e=>this.emprform.setValue(e));
  }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.es.updateEmp(this.id,data).subscribe(e=>console.log(e));
  }

}
