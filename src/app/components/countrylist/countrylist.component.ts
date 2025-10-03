import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../../entities/country';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';
import { CountryaddComponent } from "../countryadd/countryadd.component";
import { CountryeditComponent } from "../countryedit/countryedit.component";

declare var bootstrap: any;  // 👈 so we can access Bootstrap Modal API

@Component({
  selector: 'app-countrylist',
  standalone: true,
  imports: [CommonModule, FormsModule, CountryaddComponent, CountryeditComponent],
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent implements OnInit {

  countries: Country[] = [];
  id: number = 0;

  country: Country = new Country();
  msg: string = '';

  constructor(private countryService: CountryService, private router: Router) { }

  onSubmit() {
    this.addCountry();
  }

  addCountry() {
    if (window.confirm('Do You Want To Submit?')) {
    if (this.country.id) {
      this.countryService.editCountry(this.country).subscribe(data => {
        this.showMessage(data);
         this.country.name = '';
         this.getAllCountry();
      },
        error => { console.log("Something Went Wrong") }
      )
    } else {
      this.countryService.createCountry(this.country).subscribe(data => {
        this.showMessage(data.toString());
        this.country.name = '';
        this.getAllCountry();
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

  // ngAfterViewInit(): void {
  //   // 👇 attach modal close listener
  //   const modalEl = document.getElementById('countryModalAdd');
  //   if (modalEl) {
  //     modalEl.addEventListener('hidden.bs.modal', () => {
  //       console.log('Modal closed → refreshing list');
  //       this.getAllCountry();
  //     });
  //   }

  // }

  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.countries = data;
    })
  }

  editCountry(id: number) {
    this.id = id;
    // if(window.confirm('Do You Want To Edit')){
    // this.router.navigate(['/editcountry',id]);
    // }

    this.countryService.getCountryById(this.id).subscribe(data => {
      this.country = data
    },
      error => { console.log("Something Went Wrong " + error) }
    )
  }

  deleteCountry(id: number) {
    if (window.confirm('Do You Want To Delete')) {
      this.countryService.deleteCountryById(id).subscribe(data => {
        this.getAllCountry();
         this.showMessage(data.toString());
      })
    }
  }

  addPage() {
    this.router.navigate(['/addcountry']);
  }


}
