import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  errmessage : string = '';
  susccesmsg : string = '';

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

  
  }

  userForm = new FormGroup({
    'fullname': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required)
  })

  userSubmit(){
    if(this.userForm.valid){
      this._api.createData(this.userForm.value).subscribe((res)=>{
         console.log(res);
         this.userForm.reset();
         this.susccesmsg = res.message;

      })
    }
    else{
      this.errmessage ="all field is required.";
    }
  }

}
