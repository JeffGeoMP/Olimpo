import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidoestado',
  templateUrl: './pedidoestado.component.html',
  styleUrls: ['./pedidoestado.component.css']
})
export class PedidoestadoComponent implements OnInit {

  constructor() { }

  pedido:any;
  ngOnInit(): void {
    this.pedido= JSON.parse(localStorage.getItem("Pedido"));
  }

}
