import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from '../../entities/state';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';
import { StateaddComponent } from "../stateadd/stateadd.component";
import { StateeditComponent } from "../stateedit/stateedit.component";
import { BaseBinding } from '../../entities/base-binding';
import { CountryService } from '../../services/country.service';

declare var bootstrap: any;  // 👈 so we can access Bootstrap Modal API

@Component({
  selector: 'app-statelist',
  standalone: true,
  imports: [CommonModule, FormsModule, StateaddComponent, StateeditComponent],
  templateUrl: './statelist.component.html',
  styleUrl: './statelist.component.css'
})
export class StatelistComponent implements OnInit {

  states: State[] = [];

  state: State = new State();
  countryDropdown: BaseBinding[] = [];
  msg: string = '';

  constructor(private stateService: StateService, private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllState();
    this.countryService.getCountryIdAndName().subscribe(data => {
      this.countryDropdown = data;
    })
  }
  ngAfterViewInit(): void {
    // 👇 attach modal close listener
    const modalEl = document.getElementById('countryModalAdd');
    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', () => {
        console.log('Modal closed → refreshing list');
        this.getAllState();
      });
    }

  }

  getAllState() {
    this.states=[];
    this.stateService.getAllState().subscribe(data => {
      this.states = data;
    })
  }

  editState(id: number) {
    // this.router.navigate(['editstate',id])

    this.stateService.getStateById(id).subscribe(
      data => { this.state = data },
      error => { console.log("Something Went Wrong") })
  }

  deletestate(id: number) {
    if (window.confirm("Do You Want To Delete?")) {
      this.stateService.deleteStateById(id).subscribe(data => {
        this.getAllState();
         this.showMessage(data.toString());
      })
    }
  }

  addPage() {
    this.router.navigate(['addstate']);
  }

  onSubmit() {
    this.saveState();
  }
  saveState() {
    if (window.confirm('Do You Want To Submit?')) {
      if (this.state.id) {
        this.stateService.updateState(this.state).subscribe(data => {
          this.showMessage(data);
          this.state=new State();
           this.getAllState();
        })
      } else {
        this.stateService.createState(this.state).subscribe(data => {
          this.showMessage(data.toString());
           this.state=new State();
            this.getAllState();
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
