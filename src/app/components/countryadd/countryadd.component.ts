import { Component, OnInit } from '@angular/core';
import { Country } from '../../entities/country';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countryadd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './countryadd.component.html',
  styleUrl: './countryadd.component.css'
})
export class CountryaddComponent implements OnInit{
  country:Country=new Country();
  msg:string='';

  constructor(private countryService:CountryService,private router:Router){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.addCountry();
  }

  addCountry() {
    this.countryService.createCountry(this.country).subscribe(data=>{
    this.showMessage(data.toString());
    this.country.name='';
    })
  }
showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }
}
