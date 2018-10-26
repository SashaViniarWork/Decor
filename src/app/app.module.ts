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
import {NavelementsComponent} from './navelements/navelements.component';
import {ElementsComponent} from './elements/elements.component';
import {FIREBASE_CONFIG} from './fire.cred';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AddComponent} from './add/add.component';
import {GetElementsService} from './get-elements.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    NavelementsComponent,
    ElementsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [GetElementsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
