import React,{useState} from 'react'

export default function Pesquisa(){

    const [end,setEnd] = useState('')
    const [cep,setCep] = useState('')

    const renovaCep = (event) => {
        setCep(event.target.value)
    }

    const pesquisar = async () =>{
        let url = "https://cep.awesomeapi.com.br/json/" +cep
        let resultado = await fetch(url)
        let info = await resultado.json()
        setEnd(info.address)
    }

    return(
        <div className="procura">
            <h3>Pesquisa endereço</h3>
            <input type="text" placeholder="Qual é o CEP?" onChange={renovaCep}/>
            <button onClick={pesquisar}>Go</button>
            <div>
                <h2>Endereço: {end}</h2>
            </div>
        </div>
    )
}