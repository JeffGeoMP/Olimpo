import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTodayComponent } from './components/menu-today/menu-today.component';
import { MenusComponent } from './components/menus/menus.component';
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { FormcliComponent } from './components/formcli/formcli.component';
import {TaskListComponent} from './components/task-list/task-list.component'
import { UpdateComponent } from './components/empleado/update/update.component';
import { CreateComponent } from './components/empleado/create/create.component';
import { DeleteComponent } from './components/empleado/delete/delete.component';
import { EstadosComponent } from './components/estados/estados.component';
import { EnviadoComponent } from './components/enviado/enviado.component';
import {LoginComponent} from './components/login/login.component'
import { PedidoestadoComponent } from './components/pedidoestado/pedidoestado.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VistaComponent } from './components/empleado/vista/vista.component';
import { UpdateMenuComponent } from './components/menu-today/update-menu/update-menu.component';
import { CrearComponent } from './components/producto/crear/crear.component';



const APP_ROUTES: Routes = [
    { path:'crearProducto',component:CrearComponent},
    { path:'Login',component:LoginComponent},
    { path:'Task-list',component:TaskListComponent},
    { path:'Menus', component: MenusComponent},
    { path:'MenuToday', component: MenuTodayComponent},
    { path:'UpdateMenuToday', component: UpdateMenuComponent},
    { path:'buscar/:termino', component: BuscadorComponent},
    { path:'formulario', component: FormcliComponent},
    { path:'estado', component: EstadosComponent},
    { path:'enviado', component: EnviadoComponent},
    { path:'pedidos', component: PedidosComponent},
    { path:'pedidoestado', component: PedidoestadoComponent},
    { path:'Empleado/create', component: CreateComponent},
    { path:'Empleado/update', component: UpdateComponent},
    { path:'Empleado/delete', component: DeleteComponent},
    { path:'Empleado/vista', component: VistaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'MenuToday'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);