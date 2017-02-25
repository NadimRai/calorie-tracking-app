import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {FormComponent} from './components/pages/form.component';
import {FoodlogComponent} from './components/pages/foodlog.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  JumbotronComponent,
                  FormComponent,
                  FoodlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
