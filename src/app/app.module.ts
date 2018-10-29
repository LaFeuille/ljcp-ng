import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { environment } from '../environments/environment';
import { AppInMemoryDbService } from './app-in-memory-db.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(AppInMemoryDbService, {passThruUnknownUrl: true}),
    ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AuthModule.forRoot(),
    CoreModule.forRoot(),
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
