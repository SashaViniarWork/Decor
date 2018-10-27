import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {BathrobeComponent} from './bathrobe/bathrobe.component';
import {BedComponent} from './bed/bed.component';
import {ComplementComponent} from './complement/complement.component';
import {HotelComponent} from './hotel/hotel.component';
import {PelmentsComponent} from './pelments/pelments.component';
import {TulleComponent} from './tulle/tulle.component';
import {AddComponent} from './add/add.component';
import {AllComponent} from './all/all.component';
import {ContactComponent} from './contact/contact.component';
import {CurtainsComponent} from './curtains/curtains.component';
import {AboutComponent} from './about/about.component';
import {AboutElemComponent} from './about-elem/about-elem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: 'bathrobe',
    component: BathrobeComponent
  },
  {
    path: 'bed',
    component: BedComponent
  },
  {
    path: 'complement',
    component: ComplementComponent
  },
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: 'pelments',
    component: PelmentsComponent
  },
  {
    path: 'tulle',
    component: TulleComponent
  },
  {
    path: 'addSomeToken',
    component: AddComponent
  },
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'curtains',
    component: CurtainsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'element/:id',
    component: AboutElemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
