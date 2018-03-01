import {HomeComponent} from './home/home.component';
import {SpecimenListComponent} from './specimen-list/specimen-list.component';
import {SpecimenDetailComponent} from './specimen-detail/specimen-detail.component';
import {PeopleComponent} from './people/people.component';
import {PublicationsComponent} from './publications/publications.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'specimen-list', component: SpecimenListComponent},
  {path: 'specimen-detail/:id', component: SpecimenDetailComponent},
  {path: 'publications', component: PublicationsComponent}
];

export const Routing = RouterModule.forRoot(routes);
