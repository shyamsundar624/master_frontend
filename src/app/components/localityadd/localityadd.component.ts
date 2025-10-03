import { Component, OnInit } from '@angular/core';
import { Locality } from '../../entities/locality';
import { BaseBinding } from '../../entities/base-binding';
import { LocalityService } from '../../services/locality.service';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-localityadd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './localityadd.component.html',
  styleUrl: './localityadd.component.css'
})
export class LocalityaddComponent implements OnInit{
 
locality:Locality=new Locality();
stateDropdown:BaseBinding[]=[];

msg:string='';
constructor(private localityService:LocalityService,
  private stateService:StateService,
  private router:Router
){}

  
   ngOnInit(): void {
    this.stateService.getStateIdAndName().subscribe(data=>{
      this.stateDropdown=data;
    })
  }

  onSubmit(){
    this.saveLocality();
  }

  saveLocality() {
   this.localityService.createLocality(this.locality).subscribe(data=>{
    this.showMessage(data);
   })
  }

  showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }

}
