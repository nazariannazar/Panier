//** Appeller le fichier JSON **/

let xhr = new XMLHttpRequest(),
  method = "GET",
  url = "./data/articles.json";
xhr.open(method, url);

xhr.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    let response = JSON.parse(this.responseText);

    //** Aficher les Articles **/

    articles = "";

    for (let i = 0; i < response.length; i++) {
      let post = `
      <article class="each-article" data-id="${response[i].idProduit}">
      <div>${response[i].nomProduit}</div>
      <img
        src="${response[i].imageProduit}"
        alt="image"
      />
      <div><p>${response[i].prixProduit}€</p></div>
      <button class="adding-article" type="button">Ajouter au Panier</button>
    </article>`;
      articles += post;
    }
    document.getElementById("section-articles").innerHTML = articles;

    //** Recuperer les id **/

    let allArticles = document.querySelectorAll("article");
    for (let n = 0; n < allArticles.length; n++) {
      allArticles[n].addEventListener("click", function () {
        let id = allArticles[n].getAttribute("data-id");
        console.log(id);
        let element = response[n];
        console.log(element);

        if (element.idProduit == id) {
          //** Ajouter un article dans le panier **/

          AddingElementInPanier(element);
        }
      });
    }
  }
};

xhr.send();
