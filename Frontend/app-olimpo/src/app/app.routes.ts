import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTodayComponent } from './components/menu-today/menu-today.component';
import { MenusComponent } from './components/menus/menus.component';
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { FormcliComponent } from './components/formcli/formcli.component';


const APP_ROUTES: Routes = [
    { path:'Menus', component: MenusComponent},
    { path:'MenuToday', component: MenuTodayComponent},
    { path:'buscar/:termino', component: BuscadorComponent},
    { path:'formulario', component: FormcliComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'MenuToday'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);