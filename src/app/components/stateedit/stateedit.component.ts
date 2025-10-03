import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from '../../entities/state';
import { BaseBinding } from '../../entities/base-binding';
import { StateService } from '../../services/state.service';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stateedit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stateedit.component.html',
  styleUrl: './stateedit.component.css'
})
export class StateeditComponent implements OnInit{

  state:State=new State();
  @Input() id:number=0;
  msg:String='';
  countryDropdown:BaseBinding[]=[];

   

  constructor(private stateService:StateService,
    private countryService:CountryService,
    private router:Router,
    private activatedRouter:ActivatedRoute
    ,private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.countryService.getCountryIdAndName().subscribe(data=>{
      this.countryDropdown=data;
    })
    this.getState();
  }

    // ngOnChanges(changes: SimpleChanges) {
    //   if (changes['id']) {
    //     console.log("CountryEditComponent id changed:", this.id);
    //     // load country data here
    //     this.getState();
    //   }
    // }

//     ngOnChanges(changes: SimpleChanges) {
//   if (changes['id'] && changes['id'].currentValue) {
//     console.log("StateEditComponent id changed:", this.id);
//     this.getState();
//     this.cd.detectChanges();
//   }
// }
  getState() {
    this.id=this.activatedRouter.snapshot.params['id'];
    this.stateService.getStateById(this.id).subscribe(
      data=>{ this.state=data},
      error=>{console.log("Something Went Wrong")})
  }

  onSubmit(){
    this.updateState();
  }
  updateState() {
   this.stateService.updateState(this.state).subscribe(data=>{
this.showMessage(data);
   })
  }

  showMessage(message:string){
    this.msg=message

    setTimeout(() => {
      this.msg=''
    }, 4000);
  }
}
