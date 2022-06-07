import React, { useCallback,} from 'react'
import ChildUseCallBack from './ChildUseCallBack';

export default function DemoHookUseCallBack() {

  let [like, setLike] = useState(1);

  const renderNotify = () =>{
    return `Bạn đã thả ${like } tim`
  }

  let callBackRenderNotify = useCallback(renderNotify, [])
  return (
    <div className="m-5">
        Like:{like} tim
        <br />
        <span style={{cursor: 'pointer' , color:'red', fontSize:35}} onClick={()=>{

        }}>tim</span>
        <small>{renderNotify()}</small>
        <br />
        <br />
        <ChildUseCallBack renderNotify= {callBackRenderNotify} />
    </div>
  )
}
