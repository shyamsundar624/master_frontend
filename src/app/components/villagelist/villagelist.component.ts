import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Village } from '../../entities/village';
import { VillageService } from '../../services/village.service';
import { Router } from '@angular/router';
import { MunicipalityService } from '../../services/municipality.service';
import { BaseBinding } from '../../entities/base-binding';

@Component({
  selector: 'app-villagelist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './villagelist.component.html',
  styleUrl: './villagelist.component.css'
})
export class VillagelistComponent implements OnInit {
  villages: Village[] = [];
  vill: Village = new Village();
  muniDropdown: BaseBinding[] = [];
  msg: string = '';

  constructor(private villageService: VillageService, private muniService: MunicipalityService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVillages();
    this.muniService.getMunicipalityIdAndName().subscribe(data => { this.muniDropdown = data });
  }

  getVillages() {
    this.villageService.getAllVillage().subscribe(data => {
      this.villages = data
    })
  }

  editVillage(id: number) {
    // this.router.navigate(['editvillage',id]);
    this.villageService.getVillageById(id).subscribe(data => {
      this.vill = data;
    })
  }

  deleteVillage(id: number) {
    if (window.confirm("Do You Want Delete?")) {
      this.villageService.deleteVillageById(id).subscribe(data => {
        this.getVillages()
      })
    }
  }

  addVillage() {
    this.router.navigate(['addvillage']);
  }

  onSubmit() {
    this.saveVill();
  }

  saveVill() {
    if (window.confirm('Do You Want To Submit?')) {
      if (this.vill.id) {
        this.villageService.updateVillage(this.vill).subscribe(
          data => {
            this.getVillages();
            this.vill = new Village();
            this.showMessage(data)
          }
        )
      } else {
        this.villageService.createVillage(this.vill).subscribe(
          data => {
            this.getVillages();
            this.vill = new Village();
            this.showMessage(data)
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
