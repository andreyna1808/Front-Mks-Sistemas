import { createSlice } from '@reduxjs/toolkit'
const _ = require("lodash");

const slice = createSlice({
  name: 'buyProduct',
  initialState: {
    buyProducts: []
  },
  reducers: {
    AddProductCard: (state, action) => {
      state.buyProducts = [...state.buyProducts, { ...action.payload, quantity: 1, price: Number(action.payload.price), initialPrice: Number(action.payload.price) }]
    },
    RemoveProductCard: (state, action) => {
      state.buyProducts = state.buyProducts.filter((b) => b.id !== action.payload)
    },
    RemoveAllProducts: (state) => {
      state.buyProducts = []
    },
    MoreQuantity: (state, action) => {
      const changeQuantity = state.buyProducts.map((productById) => {
        if (productById.id === action.payload) {
          let moreOneQuantity = productById.quantity + 1
          let sumPrice = productById.price + productById.initialPrice

          return { ...productById, quantity: moreOneQuantity, price: sumPrice }
        }
        return productById
      })

      state.buyProducts = changeQuantity
    },
    LessQuantity: (state, action) => {
      const changeQuantity = state.buyProducts.map((productById) => {
        if (productById.id === action.payload) {
          let lessOneQuantity = productById.quantity - 1
          let subPrice = productById.price - productById.initialPrice

          if (productById.quantity <= 2) {
            lessOneQuantity = 1
            subPrice = productById.initialPrice
            return { ...productById, quantity: lessOneQuantity, price: subPrice }

          } else if (productById.quantity > 1) {
            return { ...productById, quantity: lessOneQuantity, price: subPrice }

          }

        }
        return productById
      })

      state.buyProducts = changeQuantity
    },
  }
})

export const { AddProductCard, RemoveProductCard, MoreQuantity, LessQuantity, RemoveAllProducts } = slice.actions

export default slice.reducer
