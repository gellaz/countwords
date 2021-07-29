import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {TextInputComponent} from './text-input/text-input.component';
import {HttpInterceptorService} from "./http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    TextInputComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
