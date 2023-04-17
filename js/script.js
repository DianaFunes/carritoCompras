const app = new Vue({
  el: '#app',
  data: {
    iva:0.16,
    frutas: [],
    nuevaFruta: {
      nombre: '',
      cantidad: 0,
      precio: 0
    }
    
  },
  methods: {
    agregarFruta() {
      if (this.nuevaFruta.nombre && this.nuevaFruta.cantidad && this.nuevaFruta.precio) {
        this.frutas.push({
          id: Date.now(),
          nombre: this.nuevaFruta.nombre,
          cantidad: this.nuevaFruta.cantidad,
          precio: this.nuevaFruta.precio,
        });
        this.nuevaFruta.nombre = '';
        this.nuevaFruta.cantidad = 0;
        this.nuevaFruta.precio= 0;
      }
    },
    quitarFruta(fruta) {
      const index = this.frutas.indexOf(fruta);
      if (index !== -1) {
        this.frutas.splice(index, 1);
      }
    },
    calcularTotal() {
      let total = 0;
      for (const fruta of this.frutas) {
        total += fruta.cantidad * fruta.precio;
      }
      return total;
    },
    calcularCantidad() {
      let cantidadTotal = 0;
      for (const fruta of this.frutas) {
        cantidadTotal += fruta.cantidad;
      }
      return cantidadTotal;
    },
    con() {
      let total = this.calcularTotal();
      let con = total * (1 + this.iva);
      return con;
    },
    calcularIva() {
      let total = this.calcularTotal();
      let ivaTotal = total * this.iva;
      return ivaTotal;
    },
  }
});