import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Municipality } from '../../entities/municipality';
import { MunicipalityService } from '../../services/municipality.service';
import { Router } from '@angular/router';
import { BaseBinding } from '../../entities/base-binding';
import { LocalityService } from '../../services/locality.service';

@Component({
  selector: 'app-municipalitylist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './municipalitylist.component.html',
  styleUrl: './municipalitylist.component.css'
})
export class MunicipalitylistComponent implements OnInit {
  municipality: Municipality[] = [];

  muni: Municipality = new Municipality();
  localityDropdown: BaseBinding[] = [];
  msg: string = '';

  constructor(private muniService: MunicipalityService,
    private localityService: LocalityService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getAllMunicipality();
    this.localityService.getLocalityIdAndName().subscribe(data => { this.localityDropdown = data });
  }

  getAllMunicipality() {
    this.muniService.getAllMunicipality().subscribe(data => {
      this.municipality = data;
    })
  }

  editMunicipality(id: number) {
    // this.router.navigate(['editmunicipality',id]);
    this.muniService.getMunicipalityById(id).subscribe(data => this.muni = data)
  }

  deleteMunicipality(id: number) {
    if (window.confirm("Do You Want To Delete")) {
      this.muniService.deleteMunicipalityById(id).subscribe(data => {
         this.showMessage(data.toString());
        this.getAllMunicipality();
      })
    }
  }

  addPage() {
    this.router.navigate(['addmunicipality']);
  }

  onSubmit() {
    this.saveMunicilaity();
  }

  saveMunicilaity() {
    if (window.confirm('Do You Want To Submit?')) {
      if (this.muni.id) {
        this.muniService.updateMunicipality(this.muni).subscribe(
          data => {
            this.showMessage(data)
            this.getAllMunicipality();
            this.muni = new Municipality();
          }
        )
      } else {
        this.muniService.createMunicipality(this.muni).subscribe(
          data => {
            this.showMessage(data)
            this.getAllMunicipality();
            this.muni = new Municipality();
          }
        )
      }
    }
  }
  showMessage(msg: string) {
    this.msg = msg;

    setTimeout(() => {
      this.msg = '';
    }, 4000);
  }
}
