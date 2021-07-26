import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HistoryComponent } from './pages/history/history.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', component: NavbarComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
