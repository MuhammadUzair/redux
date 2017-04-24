import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer }),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5,
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
