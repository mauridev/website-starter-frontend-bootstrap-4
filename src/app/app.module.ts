import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Components */
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';


/*Services */
import { ApiService } from './api.service';
import { SeeuService } from './seeu/services/seeu.service';
import { AuthService } from './auth.service';
import { AuthinterceptorService } from './authinterceptor.service';



import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { EntryComponent } from './seeu/entry/entry.component';
import { DashboardComponent } from './seeu/dashboard/dashboard.component';
import { CoverComponent } from './home/cover/cover.component';
import { UseComponent } from './seeu/use/use.component';
import { AddComponent } from './seeu/entry/add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    EntryComponent,
    DashboardComponent,
    CoverComponent,
    UseComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    ApiService,
    AuthService,
    SeeuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
