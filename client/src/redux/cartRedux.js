import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const duplicateProduct = state.products.find(product=>product._id === action.payload._id);
      if(duplicateProduct) {
        const index = state.products.indexOf(duplicateProduct);
        console.log(state.products[index].price);
        state.products[index].quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
        return ;
      } 
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct : (state,action) =>{
      state.quantity -= 1;
      state.products.splice(action.payload.index,1);
      state.total -= action.payload.price * action.payload.quantity;
    },
    incrementQuantity : (state,action) =>{
      state.products[action.payload].quantity += 1;
    },
    decrementQuantity : (state,action) =>{
      state.products[action.payload].quantity -= 1;
      if(state.products[action.payload].quantity === 0) {
        state.products.splice(action.payload.index,1);
        state.quantity -= 1;
        state.total -= action.payload.price * action.payload.quantity;
      }
    }
  },
});

export const { addProduct, deleteProduct,incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
