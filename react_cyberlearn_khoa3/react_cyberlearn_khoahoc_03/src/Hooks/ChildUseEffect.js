import React, {useEffect} from 'react'

export default function ChildUseEffect() {

    console.log(' render child userEffect')
    
  return (
    <div>
        <textarea></textarea><br/>
        <button className="btn btn-success">Gửi</button>
    </div>
  )
}
