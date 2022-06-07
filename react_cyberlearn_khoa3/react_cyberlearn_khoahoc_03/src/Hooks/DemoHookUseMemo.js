import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {

    let [like , setLike] = useState(1);
    let cart = [
        {id:1, name:'iphone' , price:1000},
        {id:1, name:'iphone' , price:2000},
        {id:1, name:'iphone' , price:3000},
    ];
    const cartMemo = useMemo(()=>cart, [])
  return (
<div className="m-5">
    Like: {like} tim
    <br/>
    <span style={{cursor: 'pointer', color:'red', fontSize:35}} onClick={()=>{setLike(like+1)}}>tim</span>
    <br/>
    <br/>
    <ChildUseMemo cart={cartMemo} />
</div>
  )
}
