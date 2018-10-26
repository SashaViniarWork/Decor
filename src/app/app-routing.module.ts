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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
