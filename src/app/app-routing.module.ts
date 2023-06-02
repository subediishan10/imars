import { CUSTOM_ELEMENTS_SCHEMA, Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {  path: 'login',component: LoginComponent},
  {  path:'forget-password',component:ForgetPasswordComponent },
  {  path: 'register',component: RegisterComponent},
  {  path:'',redirectTo:'/Login',pathMatch:'full' },

  { 
     path: 'admin',
     loadChildren: () =>
        import('./modules/admin/admin.module').then((m)=>m.AdminModule),
  },
  {  path:'**', component:NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutingModule { }
