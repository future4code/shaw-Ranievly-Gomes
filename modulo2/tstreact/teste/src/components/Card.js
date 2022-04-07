import React from "react";

export default function Card(props){
    let newClassName=`color_bg ${props.alt}`
    let bg_img=`url(${props.imagens})`
    let {titulo, precoAntigo, novoPreco, moeda} = props
   
    return(

        <div className="card">
            <div className="warpper">
                <div className={newClassName}></div>
                <div className="card_img" style={{"backgroundImagem":bg_img}}></div>
                <div className="coracao">
                    <svg colocar uma imagem de coração aqui1>
                        <path>
                        </path>
                    </svg>
                </div>

                <div className="cardInfo">
                   <h1>`{titulo}</h1>
                       <div className="action">
                            <div className="grupoPreco">
                                <p className="preco precoAntigo">{moeda}{precoAntigo}</p>
                                <p className="preco novoPreco">{moeda}{novoPreco}</p>
                            </div>

                       <div className="cart">
                           <svg className="outCart" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 64 64">
                               <path d="M2 6h10110 40h3218-24h16"></path>
                               <circle cx="23" cy="54" r="4"></circle>
                               <circle cx="49" cy="54" r="4"></circle>
                           </svg>
                       </div>
                </div>
            </div>
        </div>
    </div>
    )
}

