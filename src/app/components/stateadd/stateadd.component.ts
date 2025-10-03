import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from '../../entities/state';
import { BaseBinding } from '../../entities/base-binding';
import { StateService } from '../../services/state.service';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stateadd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stateadd.component.html',
  styleUrl: './stateadd.component.css'
})
export class StateaddComponent implements OnInit{

  state:State=new State();
  countryDropdown:BaseBinding[]=[];
  msg:string='';

  constructor(private stateService:StateService,
    private countryService:CountryService,
    private router:Router
  ){}


  ngOnInit(): void {
    this.countryService.getCountryIdAndName().subscribe(data=>{
      this.countryDropdown=data;
    })
  }

  onSubmit(){
    this.saveState();
  }
saveState(){
  this.stateService.createState(this.state).subscribe(data=>{
    this.showMessage(data.toString());
  })
}

showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }
}
