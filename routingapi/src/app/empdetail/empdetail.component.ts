import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  id:number;
  emp:any;
  constructor(ar:ActivatedRoute,es:EmpService) {
    this.id=ar.snapshot.params.id;
    es.getEmp(this.id).subscribe(e=>this.emp=e);
   }

  ngOnInit(): void {
  }

}