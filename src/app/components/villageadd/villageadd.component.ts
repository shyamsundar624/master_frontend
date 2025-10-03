import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Village } from '../../entities/village';
import { BaseBinding } from '../../entities/base-binding';
import { VillageService } from '../../services/village.service';
import { Router } from '@angular/router';
import { MunicipalityService } from '../../services/municipality.service';

@Component({
  selector: 'app-villageadd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './villageadd.component.html',
  styleUrl: './villageadd.component.css'
})
export class VillageaddComponent implements OnInit{

  vill:Village=new Village();
    muniDropdown:BaseBinding[]=[];
    msg:string='';
  
    constructor(private muniService:MunicipalityService,
      private villService: VillageService,
      private router :Router
    ){}
  
    ngOnInit(): void {
      this.muniService.getMunicipalityIdAndName().subscribe(data=>{this.muniDropdown=data});
    }
  
    onSubmit(){
  this.saveVill();
    }
  
    saveVill() {
    this.villService.createVillage(this.vill).subscribe(
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
