import React from 'react'

export default function DataBindingRFC() {

    const name="Trần Hoàng"
  return (
    <div>
        <h1>React functional component data binding</h1>
        <hr/>
        <h1 className='text-danger'>{name}</h1>
    </div>
  )
}
