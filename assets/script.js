
const generarTarjetas = () => {

    alert("Carnte Generado!")

    let nom = document.getElementById("name").value;
    let ape = document.getElementById("lastName").value;
    let edad = document.getElementById("age").value;
    let RH = document.getElementById("rh").value;
    let tSang = document.getElementById("tSangre").value;
    let cell = document.getElementById("cell").value;

  const card = `<div class="card text-white bg-warning m-3" style="max-width: 18rem;">
      <div class="card-header">Telefono: ${cell}</div>
      <div class="card-body">
        <h5 class="card-title">Nombre: ${nom} ${ape}</h5>
        <p class="card-text">Edad: ${edad}<br> Tipo De Sangre: ${tSang}${RH}</p>
      </div>
    </div>`;

  let contenidoAlDiv = card;

//   for (let i = 1; i <= num; i++) {
//     contenidoAlDiv += card;
//   }
  document.getElementById("cardContainer").innerHTML += contenidoAlDiv;
};
