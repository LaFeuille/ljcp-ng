import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import { CoreModule } from './core/core.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
