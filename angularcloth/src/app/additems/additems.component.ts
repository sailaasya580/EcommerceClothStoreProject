import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  constructor(private cs:ClothService) { }//DI

  onSubmit(data:any){
   //console.log(data);
  this.cs.saveCloth(data).subscribe(e=>console.log(e));
  }

  ngOnInit(): void {
  }

}

