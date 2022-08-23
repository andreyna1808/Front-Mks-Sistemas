import { configureStore, combineReducers } from '@reduxjs/toolkit'
import products from '../reducers/products'
import openCard from '../reducers/openCard';
import buyProducts from '../reducers/buyProducts';

const reducer = combineReducers({
  products: products,
  openCard: openCard,
  buyProducts: buyProducts
});

export const store = configureStore({
  reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch