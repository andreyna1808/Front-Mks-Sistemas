export default interface IStateProducts {
  openCard: {
    isOpen: boolean,
  }
  products: {
    products: [
      {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: string,
        createdAt: string,
        updatedAt: string
      }
      
    ]
  },
  buyProducts: {
    buyProducts: [
      {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: string,
        createdAt: string,
        updatedAt: string
      }
    ]
  }
}
