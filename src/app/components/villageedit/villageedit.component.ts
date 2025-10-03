import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Village } from '../../entities/village';
import { BaseBinding } from '../../entities/base-binding';
import { MunicipalityService } from '../../services/municipality.service';
import { VillageService } from '../../services/village.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-villageedit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './villageedit.component.html',
  styleUrl: './villageedit.component.css'
})
export class VillageeditComponent implements OnInit{

  vill:Village=new Village();
    muniDropdown:BaseBinding[]=[];
    msg:string='';
    id:number=0;
  
    constructor(private muniService:MunicipalityService,
      private villService: VillageService,
      private router :Router,
      private activatedRouter:ActivatedRoute
    ){}
  
    ngOnInit(): void {
      this.muniService.getMunicipalityIdAndName().subscribe(data=>{this.muniDropdown=data});
      this.getVillage();
    }

  getVillage() {
 this.id=   this.activatedRouter.snapshot.params['id'];
 this.villService.getVillageById(this.id).subscribe(data=>{
  this.vill=data;
 })
  }
  
    onSubmit(){
  this.updateVill();
    }
  
    updateVill() {
    this.villService.updateVillage(this.vill).subscribe(
      data=>this.showMessage(data)
    )
    }
    showMessage(msg:string){
      this.msg=msg;
  
      setTimeout(() => {
        this.msg='';
      }, 4000);
    }

}

