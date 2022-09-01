
function init(){
    var resultado = document.getElementById('resultado');
    var camisa = document.getElementsById('camisa');
    var pantalon = document.getElementsById('pantalon');
    var zapatos = document.getElementsById('zapato');

    var compra = document.getElementsById('compra');
    var table = document.getElementById('table');
}



const Tienda = (() => {
    const inventario = [
        {id: 1, nombre: "Camisa", stock: 2, precio: 9.99},
        {id: 2, nombre: "Pantalón", stock: 2, precio: 19.99},
        {id: 3, nombre: "Zapatos", stock: 2, precio: 39.99}
    ];

    const carritoDeCompras = inventario.map(function(v, i, a){
        return v;
    });

    const agregarProducto = (id) => {};

    const realizarPago = (precio) => {};

    const actualizarInventario = (id) => {};

    return{
        inventario, carritoDeCompras
    };
})();


camisa.onclick = function (e){
    //const agregandoCam = inventario.filter(food => inventario.nombre === "Camisa");
    resultado.textContent = resultado.textContent + "Prueba";
    
}



console.log(Tienda);