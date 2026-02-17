<script>

let contador=0;

function abrirModal(nombre,precio,desc,img){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalTitulo").innerText=nombre;
    document.getElementById("modalDesc").innerText=desc;
    document.getElementById("modalPrecio").innerText=precio;
    document.getElementById("modalImg").src=img;

    document.getElementById("whatsLink").href=
    "https://wa.me/51952105060?text=Hola quiero comprar este Café "+nombre;
}

function cerrarModal(){
    document.getElementById("modal").style.display="none";
}

function agregarCarrito(){
    contador++;
    document.getElementById("contador").innerText=contador;
    cerrarModal();
}

</script>