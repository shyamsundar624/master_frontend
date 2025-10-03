import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { CountryaddComponent } from './components/countryadd/countryadd.component';
import { CountryeditComponent } from './components/countryedit/countryedit.component';
import { StatelistComponent } from './components/statelist/statelist.component';
import { StateaddComponent } from './components/stateadd/stateadd.component';
import { StateeditComponent } from './components/stateedit/stateedit.component';
import { LocalitylistComponent } from './components/localitylist/localitylist.component';
import { LocalityaddComponent } from './components/localityadd/localityadd.component';
import { LocalityeditComponent } from './components/localityedit/localityedit.component';
import { MunicipalitylistComponent } from './components/municipalitylist/municipalitylist.component';
import { MunicipalityaddComponent } from './components/municipalityadd/municipalityadd.component';
import { MunicipalityeditComponent } from './components/municipalityedit/municipalityedit.component';
import { VillagelistComponent } from './components/villagelist/villagelist.component';
import { VillageaddComponent } from './components/villageadd/villageadd.component';
import { VillageeditComponent } from './components/villageedit/villageedit.component';
import { LocationTabComponent } from './components/location-tab/location-tab.component';

export const routes: Routes = [
    {path:'App',component:AppComponent},

    {path:'country',component:CountrylistComponent},
    {path:'addcountry',component:CountryaddComponent},
    {path:'editcountry/:id',component:CountryeditComponent},

    {path:'state',component:StatelistComponent},
    {path:'addstate',component:StateaddComponent},
    {path:'editstate/:id',component:StateeditComponent},

    {path:'locality',component:LocalitylistComponent},
    {path:'addlocality',component:LocalityaddComponent},
    {path:'editlocality/:id',component:LocalityeditComponent},


    {path:'municipality',component:MunicipalitylistComponent},
    {path:'addmunicipality',component:MunicipalityaddComponent},
    {path:'editmunicipality/:id',component:MunicipalityeditComponent},

    {path:'village',component:VillagelistComponent},
    {path:'addvillage',component:VillageaddComponent},
    {path:'editvillage/:id',component:VillageeditComponent},

    {path:'locationMaster',component:LocationTabComponent},

];
