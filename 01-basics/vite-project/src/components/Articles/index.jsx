import React from 'react'

import image01 from "../../assets/images/image-retro-pcs.jpg";

const article = [
    {
        order_no: "01",
        title: "",
        paragraph: "",
        imgSrc: image01,
    }
]

const Articles = () => {
  return (
    <div>
        {article.map((element, idx) => {
            return (<div key={idx}>
                <img src={element.imgSrc} />
            </div>)
        })}
    </div>
  )
}

export default Articles