import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {
     path:'',
     component: AdminDashComponent,
     children:[
       { path:'home',component: HomeComponent},
       { path:'contact',component: ContactComponent},
       { path:'services',component: ServicesComponent},
       { path:'about',component: AboutComponent},
       { path:'header',component: HeaderComponent},
       { path:'footer',component: FooterComponent},
       { path:'',component: AdminDashComponent},
       { path:'',redirectTo:'/admin/home', pathMatch:'full'},
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
 
})
export class AdminRoutingModule { }
