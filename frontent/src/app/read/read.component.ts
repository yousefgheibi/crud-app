import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private _api : ApiService) { }

  readData : any;
  ngOnInit(): void {
    this._api.getAllData().subscribe((res)=>{
      this.readData = res.data;
    })
  }


  deleteItem(id : number){
    console.log(id);
      this._api.deleteData(id).subscribe((res)=>{

        this._api.getAllData().subscribe((res)=>{
          this.readData = res.data;
        })
      });

  }
}
