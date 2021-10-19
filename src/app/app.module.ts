import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoVelhaComponent } from './jogo-velha/jogo-velha.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoVelhaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
