// Fonction pour ajouter un article dans le panier

function AddingElementInPanier(element) {
  // console.log(element);

  let qtyOfArticles = 2;
  let totalPrice = element.prixProduit * qtyOfArticles;
  let allElements = "";
  panier = `

    <tr class="one-type-article" data-id="${element.idProduit}">
    <td>
    <img
    src="${element.imageProduit}"
    alt="image"
    />
    <p class="article-name">
    ${element.nomProduit}
    </p>
    </td>
    <td>
    <button class="decrease" type="button">-</button>
    <span>${qtyOfArticles}</span>
    <button class="increase" type="button">+</button>
    </td>
    <td class="unit-price">${element.prixProduit}€</td>
    <td class="total-price">${totalPrice}€</td>
    <td>
    <button class="delet" type="button">X</button>
    </td>
    </tr>`;
  // allElements += panier;
  document.getElementById("adding-article-in-panier").innerHTML = panier;
}
