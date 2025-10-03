import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from '../../entities/state';
import { BaseBinding } from '../../entities/base-binding';
import { LocalityService } from '../../services/locality.service';
import { StateService } from '../../services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Locality } from '../../entities/locality';

@Component({
  selector: 'app-localityedit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './localityedit.component.html',
  styleUrl: './localityedit.component.css'
})
export class LocalityeditComponent implements OnInit{

  locality:Locality=new Locality();
  id:number=0;
  msg:string='';
  stateDropdown:BaseBinding[]=[];

  constructor(private localityService:LocalityService,
    private stateService:StateService,
    private router:Router,
    private activatedRouter:ActivatedRoute
  ){}


  ngOnInit(): void {
   this.stateService.getStateIdAndName().subscribe(data=>{
    this.stateDropdown=data;
   })
this.getLocality();
  }

  getLocality() {
   this.id=this.activatedRouter.snapshot.params['id'];
   this.localityService.getLocalityById(this.id).subscribe(
    data=>{this.locality=data },
  error=>{console.log("Something Went Wrong")})
  }
onSubmit(){
  this.localityService.editLocality(this.locality).subscribe(
    data=>this.showMessage(data)
  )

}

showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }
}
