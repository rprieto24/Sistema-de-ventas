class Producto {
    static contadorProductos = 0;
    constructor (nombre,precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() { // muestra informacion 
        return this._idProducto;
    }   
    get nombre() { 
        return this._nombre;
    }
    set nombre(nombre) { // modifica informacion
        return this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        return this._precio = precio;
    }
    toString() { // metodo para que cuando se instancie un nuevo producto se concatenen las palabras.
        return 'idProducto: ' + ' ' +  this._idProducto + ' ' + 'nombre:' + ' ' + this._nombre + ' ' + 'precio :' + this._precio
    }
}

// agregando la clase orden
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProductos(producto) {
        if(this.productos < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
            this.productos[this.contadorProductosAgregados++] = producto;
        }
        else {
            console.log("excediste el limite de productos");
        }
    }
    calcularTotal() {
          let totalVenta = 0;
        for(let producto of this.productos) {
            totalVenta = totalVenta + producto.precio; 
        }
        return totalVenta; 
        
    }
    mostrarOrden() {
        let productosOrden = '';
        for(let producto of this.productos) { // ver porque no se recorre el arreglo con for of
            productosOrden += producto.toString() + ' ';
        }
       return 'orden:' + this._idOrden + ' ' + 'Total:' + this.calcularTotal() + ' ' + 'Productos' + productosOrden;
    }    
}






















