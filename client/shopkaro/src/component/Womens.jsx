import React from 'react'
import Carousal from './Carousal'

export default function Womens() {

  let imglink=[
    "https://st-images.honasa.in/1920x512_1f274abf4b.jpg?format=auto&width=&qualilty=",
    "https://st-images.honasa.in/1920_X512_2de8ac5a19.jpg?format=auto&width=&qualilty=",
    "https://images.mamaearth.in/wysiwyg/Luxe-Matte-Range/1920X512.jpg?format=auto&width=&qualilty="
  ]
  return (
    <div>Womens
      <Carousal imglink={imglink}/>
    </div>
  )
}
