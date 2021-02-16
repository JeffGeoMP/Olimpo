import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTodayComponent } from './components/menu-today/menu-today.component';
import { MenusComponent } from './components/menus/menus.component';


const APP_ROUTES: Routes = [
    { path:'Menus', component: MenusComponent},
    { path:'MenuToday', component: MenuTodayComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'MenuToday'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);