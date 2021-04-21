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
import { FormcliComponent } from './components/formcli/formcli.component';
import { CommonModule } from "@angular/common"

import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateComponent } from './components/empleado/create/create.component';
import { UpdateComponent } from './components/empleado/update/update.component';
import { DeleteComponent } from './components/empleado/delete/delete.component';
import { EstadosComponent } from './components/estados/estados.component';
import { EnviadoComponent } from './components/enviado/enviado.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidoestadoComponent } from './components/pedidoestado/pedidoestado.component';
import { VistaComponent } from './components/empleado/vista/vista.component';
import { UpdateMenuComponent } from './components/menu-today/update-menu/update-menu.component';
<<<<<<< HEAD
import { ContactoComponent } from './components/shared/contacto/contacto.component';
=======
import { CrearComponent } from './components/producto/crear/crear.component';
>>>>>>> develop


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuTodayComponent,
    MenusComponent,
    BuscadorComponent,
    FormcliComponent,
    TaskListComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    EstadosComponent,
    EnviadoComponent,
    LoginComponent,
    PedidosComponent,
    PedidoestadoComponent,
    VistaComponent,
<<<<<<< HEAD
    UpdateMenuComponent
    ContactoComponent
=======
    UpdateMenuComponent,
    CrearComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    CommonModule
  ],
  providers: [
    BusquedaService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
