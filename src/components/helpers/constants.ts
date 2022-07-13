export const textMessageLogin = {
  COMPLETE_ALL_FIELDS:
    "Veillez completez les tous les champs avec  informations valides",
  COMPLETE_PASSWORD_FIELD: "Veillez taper votre mot de passe",
  COMPLETE_EMAIL_FIELD: "Veillez taper votre email",
  EMAIL_OR_PASSWORD_INVALID: "Email ou mot de passe invalide",
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Veillez completez les tous les champs requis avec  informations valides"
};

export const imgProjects = {
  projectOne:
    "https://res.cloudinary.com/chanel-muhesi/image/upload/v1645354446/JoinAfriqueLogo_dhzddy.png",
  projectJoinAdmin:
    "https://res.cloudinary.com/chanel-muhesi/image/upload/v1641466655/receptionAgent_cppcvd.png"
};

export const commandModel = [
  {
    id: 1,
    amount: 45, // $ 45 total of all panier
    user: {
      id: 8,
      name: "name ofCLient"
    },
    created: "07/02/2022",
    status: "PAYED",
    panier: [
      {
        nameProduct: "NameOfproduit_1", // dette technique
        product: 1, // id of product
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10 //
      },
      {
        nameProduct: "NameOfproduit_1",
        product: 5,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 5,
        total: 25
      },
      {
        nameProduct: "",
        product: 3,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10
      }
    ]
  }
];

export enum STATUS_COMMAND {
  ONPENDING = "ONPENDING",
  PAYED = "PAYED"
}
export enum TAB_ADMIN {
  CLIENTS,
  PRODUCTS,
  CATEGORIES,
  COMMANDS
}

// text For showToast

export const textMessageSignUp = {
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Veillez completez les tous les champs requis avec  informations valides"
};
