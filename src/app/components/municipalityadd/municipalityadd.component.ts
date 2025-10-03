import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Municipality } from '../../entities/municipality';
import { BaseBinding } from '../../entities/base-binding';
import { MunicipalityService } from '../../services/municipality.service';
import { LocalityService } from '../../services/locality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipalityadd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './municipalityadd.component.html',
  styleUrl: './municipalityadd.component.css'
})
export class MunicipalityaddComponent implements OnInit{

  muni:Municipality=new Municipality();
  localityDropdown:BaseBinding[]=[];
  msg:string='';

  constructor(private muniService:MunicipalityService,
    private localityService: LocalityService,
    private router :Router
  ){}

  ngOnInit(): void {
    this.localityService.getLocalityIdAndName().subscribe(data=>{this.localityDropdown=data});
  }

  onSubmit(){
this.saveMunicilaity();
  }

  saveMunicilaity() {
  this.muniService.createMunicipality(this.muni).subscribe(
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
