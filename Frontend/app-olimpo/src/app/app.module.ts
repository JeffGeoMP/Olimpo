import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { BusquedaService } from "./servicios/busqueda.service";
import { ProductService } from "./servicios/productos.service";

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuTodayComponent } from './components/menu-today/menu-today.component';
import { MenusComponent } from './components/menus/menus.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuTodayComponent,
    MenusComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    BusquedaService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
