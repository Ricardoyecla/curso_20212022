import React, { useState } from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar=()=>{
        console.log('esto funciona al hacer click')
    }
    
    return (
        <div>
            <h3>Mi componente contador:{numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </div>

    );
}

export default Contador;