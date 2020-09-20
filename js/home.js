// function AddingElementsInPanier(element) {
//   let selectAllElementsOfPanier = document.querySelectorAll("tbody");

//   let oneElementId = document.querySelector("one-type-article");
//   console.log(oneElementId);
//   if (element[i].idProduit == oneElementId) {
//     let qtyOfArticles = +1;
//     let totalPrice = element.prixProduit * qtyOfArticles;
//     ElementOfPanier(element);
//   } else {
//     let qtyOfArticles = 1;
//     let totalPrice = element.prixProduit * qtyOfArticles;
//     let panier = "";
//     ElementOfPanier(element);
//   }
// }
//************************************** LES FONCTION *******************************************//

//** Fonction pour Effacer un element du panier **/

// Fonction pour ajouter un article dans le panier
function ElementOfPanier(element) {
  panier += `

<tr class="one-type-article" data-element-id=${element.idProduit}>
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
  document.getElementById("adding-article-in-panier").innerHTML = panier;
}
