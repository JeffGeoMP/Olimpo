import { Component, OnInit } from '@angular/core';
import { Producto, ProductService, TipoMenu } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  
  seleccion:Number = 2;

  nombre:string = '';
  precio:number = 0;
  descripcion:string = '';
  id_menu:number = 0;
  imagen:string = '';

  tipo_menu: TipoMenu[] = [];
  productos: Producto[] = [];

  actualizar:boolean = false;
  actualizarProduct: Producto;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  selectOption(valor:Number){
    this.seleccion = valor;
    if(this.seleccion == 1){
      this.actualizar = false;
      this.nombre = '';
      this.precio = 0;
      this.descripcion = '';
      this.id_menu = 0;
      this.imagen = '';
      this.productService.getTiposMenus().subscribe((data:TipoMenu[])=>{
        this.tipo_menu = data;
      });
    }else if(this.seleccion == 2){
      this.actualizar = false;
      this.productService.getProductos().subscribe((data:Producto[])=>{
        this.productos = data;
      });
    }else if(this.seleccion == 3){
      this.actualizar = true;
      this.productService.getProductos().subscribe((data:Producto[])=>{
        this.productos = data;
      });
    }
  }

  crearProducto(){
    let newProduct:Producto = {
      id_platillo: this.id_menu,
      nombre: this.nombre,
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen,
    }
    this.productService.crearProducto(newProduct).subscribe(()=>{
      alert("Producto creado");
      this.seleccion = 0;
    },error => {
      alert("ah ocurrido un erro");
    });
  }

  eliminarProducto(id, nombre){
    this.productService.eliminarProducto(id).subscribe(()=>{
      alert(`El producto ${nombre} fue eliminado`);
      this.seleccion = 0;
    }, error=>{
      alert(`ERROR!!! El producto ${nombre} no se pudo eliminar`);
    });
  }

  actualizarFunction(producto_:Producto){
    this.seleccion = 4;
    this.actualizarProduct = producto_;
    this.id_menu = producto_.id_platillo;
    this.nombre = producto_.nombre;
    this.precio = producto_.precio;
    this.descripcion = producto_.descripcion;
    this.imagen = producto_.imagen;
  }

  actualizarProducto(){
    let Product:Producto = {
      id_platillo: this.id_menu,
      nombre: this.nombre,
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen,
    }
    
    this.productService.actualizarProducto(Product).subscribe(()=>{
      alert("Producto actualizado");
      this.seleccion = 0;
    },error => {
      console.log(error);
      alert("ah ocurrido un error");
    });
    
  }

  

}
