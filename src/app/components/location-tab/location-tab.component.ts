import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { StatelistComponent } from "../statelist/statelist.component";
import { LocalitylistComponent } from "../localitylist/localitylist.component";
import { MunicipalitylistComponent } from "../municipalitylist/municipalitylist.component";
import { VillagelistComponent } from "../villagelist/villagelist.component";
import { CountrylistComponent } from "../countrylist/countrylist.component";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-location-tab',
  standalone: true,
  imports: [CommonModule, StatelistComponent, LocalitylistComponent, 
    MunicipalitylistComponent, VillagelistComponent, CountrylistComponent,RouterModule],
  templateUrl: './location-tab.component.html',
  styleUrl: './location-tab.component.css'
})
export class LocationTabComponent implements AfterViewInit{

 @ViewChild(StatelistComponent) stateListComp!: StatelistComponent;


 tabs = [
    { id: 'country', label: 'Country' },
    { id: 'state', label: 'State' },
    { id: 'locality', label: 'Locality' },
    { id: 'municipality', label: 'Municipality' },
    { id: 'village', label: 'Village' }
  ];



  ngAfterViewInit(): void {
  // const tabContainer = document.getElementById('locationTab');
  // if (tabContainer) {
  //   tabContainer.addEventListener('shown.bs.tab', (event: any) => {
  //     const targetId = event.target.getAttribute('data-bs-target')?.replace('#', '');
  //     console.log('Active tab:', targetId);

  //     if (targetId === 'state' && this.stateListComp) {
  //       setTimeout(() => this.stateListComp?.refresh(), 1000);
  //     }
  //   });
  // }
}

}
