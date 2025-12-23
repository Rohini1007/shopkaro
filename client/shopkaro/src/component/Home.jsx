import React from 'react'
import Carousal from './Carousal'

export default function Home() {

let imglink=[
    "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/4eb0a6a07fc9d996.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/160/image/74f0ad81e44e6e6f.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/66faf3950cda0b7a.png?q=60"
]

  return (
    <div>
      <Carousal imglink={imglink}/>
    </div>
  )
}
