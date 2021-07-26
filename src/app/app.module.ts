import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';


import { HistoryComponent } from './pages/history/history.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HistoryComponent,
    NavbarComponent,
    RegisterComponent,
    UserComponent,
  ],
  imports: [
    FormsModule,      
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
