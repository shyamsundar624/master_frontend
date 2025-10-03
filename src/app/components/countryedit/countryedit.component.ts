import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../../entities/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countryedit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './countryedit.component.html',
  styleUrl: './countryedit.component.css'
})
export class CountryeditComponent implements OnInit,OnChanges{
  country:Country=new Country();
 @Input('id') id:number=0;
  msg:string='';

  constructor(private countryService:CountryService,
    private router:Router,
    private activeRouter:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getCountry();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      console.log("CountryEditComponent id changed:", this.id);
      // load country data here
      this.getCountry();
    }
  }

  getCountry() {
    //this.id=this.activeRouter.snapshot.params['id'];
    this.countryService.getCountryById(this.id).subscribe(data=>{
      this.country=data
    },
    error=>{console.log("Something Went Wrong "+error)}
  )
  }

  updateCountry(){
    this.countryService.editCountry(this.country).subscribe(data=>{
      this.showMessage(data);
    },
  error=>{console.log("Something Went Wrong")}
)
  }
showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }
}
