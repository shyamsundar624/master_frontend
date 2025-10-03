import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Locality } from '../../entities/locality';
import { LocalityService } from '../../services/locality.service';
import { Router } from '@angular/router';
import { CountrylistComponent } from "../countrylist/countrylist.component";
import { BaseBinding } from '../../entities/base-binding';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-localitylist',
  standalone: true,
  imports: [CommonModule, FormsModule, CountrylistComponent],
  templateUrl: './localitylist.component.html',
  styleUrl: './localitylist.component.css'
})
export class LocalitylistComponent implements OnInit {

  localities: Locality[] = [];

  locality: Locality = new Locality();
  stateDropdown: BaseBinding[] = [];

  msg: string = '';

  constructor(private localiltyService: LocalityService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllLocality();
    this.stateService.getStateIdAndName().subscribe(data => {
      this.stateDropdown = data;
    })
  }

  getAllLocality() {
    this.localiltyService.getAllLocality().subscribe(data => {
      this.localities = data;
    })
  }

  editLocality(id: number) {
    // this.router.navigate(['editlocality',id]);
    this.localiltyService.getLocalityById(id).subscribe(
      data => { this.locality = data },
      error => { console.log("Something Went Wrong") })
  }

  deleteLocality(id: number) {
    if (window.confirm("Do You Want To Delete")) {
      this.localiltyService.deleteLocalityById(id).subscribe(data => {
          this.showMessage(data.toString());
        this.getAllLocality()
      })
    }
  }

  addPage() {
    this.router.navigate(['addlocality']);
  }

  onSubmit() {
    this.saveLocality();
  }

  saveLocality() {
    if (window.confirm('Do You Want To Submit?')) {
      if (this.locality.id) {
        this.localiltyService.editLocality(this.locality).subscribe(
          data => {this.showMessage(data)
            this.locality=new Locality();
          this.getAllLocality();
      })
      } else {
        this.localiltyService.createLocality(this.locality).subscribe(data => {
          this.showMessage(data);
          this.locality=new Locality();
          this.getAllLocality()
        })
      }
    }
  }

  showMessage(message: string) {
    this.msg = message

    setTimeout(() => {
      this.msg = ''
    }, 4000);
  }
}
