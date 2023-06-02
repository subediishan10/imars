import {NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations:[
    AdminDashComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
  ],
  
  imports: [
    CommonModule,
    AdminRoutingModule
  ]

})
export class AdminModule { }
