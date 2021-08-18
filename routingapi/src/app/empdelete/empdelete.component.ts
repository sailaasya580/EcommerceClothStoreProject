import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empdelete',
  templateUrl: './empdelete.component.html',
  styleUrls: ['./empdelete.component.css']
})
export class EmpdeleteComponent implements OnInit {
  id:number;
  emp:any;
  constructor(ar:ActivatedRoute,private es:EmpService) {
    this.id=ar.snapshot.params.id;
    es.getEmp(this.id).subscribe(e=>this.emp=e);
   }
  ngOnInit(): void {
  }
  onDelete(){
    this.es.deleteEmp(this.id).subscribe(e=>alert('Deleted'));
  }

}
