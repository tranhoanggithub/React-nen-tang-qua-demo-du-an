import React, {useContext} from 'react'
import { context } from './Context/ContextProvider'

export default function DemoUserContext(props) {

    //
    let store = useContext(context);
    console.log(store)
    // let cartReducer = useContext(context);
    // Gior hàng
    let {cartReducer} = useContext(context)
    let [cart, dispatch] = cartReducer
    console.log(cartReducer);
    console.log('cart', cart);

  return (
    <div>DemoUserContext</div>
  )
}
