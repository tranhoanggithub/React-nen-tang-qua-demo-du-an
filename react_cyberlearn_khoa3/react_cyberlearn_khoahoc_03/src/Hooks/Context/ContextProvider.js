import React, { useReducer } from 'react'

export const context = React.createContext();
let initialCart = [];

let cartReducer = (state, action) => {
  switch (action.type) {
    case 'addToCart': {

      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(itemCart => itemCart.id ===action.item.id);
      if(index!==-1)
      {
        cartUpdate[index].quantity+=1;
      }else{
        const itemCart= {...action.item, quantity:1};
        cartUpdate.push(itemCart);
      }



      return cartUpdate;
    }
  }
  return [...state];
};

export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer,initialCart);

    //Dùng context  bap bọc tất cả component bên trong cụ thể là app
    // store giống rootReducer

    const store ={
        cartReducer:[cart, dispatch],
        //
    }
  return (
   <context.Provider value={store}>
       {props.children}
   </context.Provider>
  )
}
