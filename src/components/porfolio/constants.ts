export const imgProjects = {
  projectOne:
    "https://res.cloudinary.com/chanel-muhesi/image/upload/v1645354446/JoinAfriqueLogo_dhzddy.png",
  projectJoinAdmin:
    "https://res.cloudinary.com/chanel-muhesi/image/upload/v1641466655/receptionAgent_cppcvd.png"
};

export const commandModel = {
  amount: 45, // $ 45 total of all panier
  user: 1, // id of user
  created: "07/02/2022",
  status: "ACTIVE",
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
      nameProduct: "NameOfproduit_1",
      product: 3,
      options: "OPTION_1",
      quantity: 5,
      priceUnit: 2,
      total: 10
    }
  ]
};

export enum STATUS_COMMAND {
  ONPENDING = "ONPENDING",
  PAYED = "PAYED"
}
