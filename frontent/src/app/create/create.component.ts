import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  errmessage : string = '';
  susccesmsg : string = '';
  getPraramid : any;

  constructor(private _api: ApiService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPraramid = this.router.snapshot.paramMap.get('id');
    this._api.getSingleData(this.getPraramid).subscribe((res)=>{
      this.userForm.patchValue({
        'fullname': res.data[0].fullname,
        'email': res.data[0].email,
        'mobile': res.data[0].mobile,
      })
    })
  
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


  userUpdate(){
    if(this.userForm.valid){
      this._api.updateData(this.userForm.value,this.getPraramid).subscribe((res)=>{
         console.log(res);
         this.userForm.reset();
         this.susccesmsg = res.message;

      })
    }
  }

}
