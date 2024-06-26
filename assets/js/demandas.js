import * as demandas from "./demandasObj.js";

var demandasCards = document.getElementById("demandas-cards");
var demandasLista = document.getElementById("demandas-lista");

$("document").ready(() => {
  demandas.demandas.forEach((demanda) => {
    // CARD
    var card = `
    <div class="col-sm-1 col-md-6 d-flex justify-content-center">
      <div class="card mb-4 text-light">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <img
              class="card-img-top me-3"
              src="${demanda.logoUrl}"
              alt="logo"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between align-tems-center w-100">
                <h4 class="card-title">${demanda.nome}</h4>
                ${
                  demanda.incentivo
                    ? '<i class="fa-solid fa-2x text-success fa-dollar-sign"></i>'
                    : '<i class="fa-solid fa-2x text-danger fa-dollar-sign"></i>'
                }
              </div>
              <span>${demanda.empresa}</span>
            </div>
          </div>
          <p class="card-text">${demanda.descricao}</p>
          <div class="footer-card d-flex justify-content-between">
            <div>
              <p><strong>Classe:</strong> ${demanda.classe}</p>
              <p><strong>Urgência:</strong> ${demanda.prioridade}</p>
            </div>
            <div class="mt-0 p-0">
              <p><strong>Status:</strong> ${demanda.status}</p>
              <p><strong>Criação:</strong> ${demanda.criadoEm.charAt(0).toUpperCase() + demanda.criadoEm.slice(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    demandasCards.insertAdjacentHTML("beforeend", card);
    
    // LISTA
    var lista = `
      <tr>    
        <td>${demanda.nome}</td>
        <td>${demanda.classe}</td>
        <td>${demanda.prioridade}</td>
        <td>${
          demanda.incentivo
            ? '<i class="fa-solid fa-check me-2 text-success fa-lg"></i>'
            : '<i class="fa-solid fa-xmark text-danger fa-lg"></i>'
        }</td>
        <td>${demanda.status}</td>
      </tr>
    `
    demandasLista.insertAdjacentHTML("beforeend", lista);

  });
});
