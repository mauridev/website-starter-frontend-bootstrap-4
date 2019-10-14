import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';


/*SEEU COMPONENTS */
import { DashboardComponent } from './seeu/dashboard/dashboard.component';
import { EntryComponent } from './seeu/entry/entry.component';
import { UseComponent } from './seeu/use/use.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'post', component: PostComponent },
  {
    path: 'seeu',
    component: DashboardComponent,
    children: [
      { path: 'entry', component: EntryComponent },
      { path: 'use', component: UseComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
