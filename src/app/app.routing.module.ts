import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuardPropertyGuard } from './guard-property.guard';

const routes: Routes = [
  { path: '', redirectTo:'home' ,pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  {path:'home', component:NewComponentComponent},
  {path:'contact-us', component:ContactUsComponent,canActivate :[GuardPropertyGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 