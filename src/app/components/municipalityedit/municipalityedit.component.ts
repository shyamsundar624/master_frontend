import { Component, OnInit } from '@angular/core';
import { Municipality } from '../../entities/municipality';
import { BaseBinding } from '../../entities/base-binding';
import { MunicipalityService } from '../../services/municipality.service';
import { LocalityService } from '../../services/locality.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-municipalityedit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './municipalityedit.component.html',
  styleUrl: './municipalityedit.component.css'
})
export class MunicipalityeditComponent implements OnInit{
muni:Municipality=new Municipality();
  localityDropdown:BaseBinding[]=[];
  msg:string='';
  id:number=0;

  constructor(private muniService:MunicipalityService,
    private localityService: LocalityService,
    private router :Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.localityService.getLocalityIdAndName().subscribe(data=>{this.localityDropdown=data});
    this.getMunicipality();
  }
  getMunicipality() {
  this.id= this.activatedRoute.snapshot.params['id'];
  this.muniService.getMunicipalityById(this.id).subscribe(data=>this.muni=data)
  }

  onSubmit(){
this.updateMunicilaity();
  }

  updateMunicilaity() {
  this.muniService.updateMunicipality(this.muni).subscribe(
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
