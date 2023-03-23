import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
// import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewComponentComponent,
    ContactUsComponent
  ],
  imports: [
    
    BrowserModule ,
    AppRoutingModule,
    
    
   ReactiveFormsModule,
    FormsModule,HttpClientModule
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
