import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {TulleComponent} from './tulle/tulle.component';
import {ComplementComponent} from './complement/complement.component';
import {PelmentsComponent} from './pelments/pelments.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {HotelComponent} from './hotel/hotel.component';
import {BedComponent} from './bed/bed.component';
import {BathrobeComponent} from './bathrobe/bathrobe.component';
import {ElementsComponent} from './elements/elements.component';
import {FIREBASE_CONFIG} from './fire.cred';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AddComponent} from './add/add.component';
import {GetElementsService} from './get-elements.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AllComponent } from './all/all.component';
import { ContactComponent } from './contact/contact.component';
import { CurtainsComponent } from './curtains/curtains.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { AboutElemComponent } from './about-elem/about-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TulleComponent,
    ComplementComponent,
    PelmentsComponent,
    AccessoriesComponent,
    HotelComponent,
    BedComponent,
    BathrobeComponent,
    ElementsComponent,
    AddComponent,
    NavBarComponent,
    FooterComponent,
    AllComponent,
    ContactComponent,
    CurtainsComponent,
    AboutComponent,
    AboutElemComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, GetElementsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
