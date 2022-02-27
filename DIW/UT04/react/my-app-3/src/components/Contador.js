import React,{useState,Fragment} from 'react';

const Contador = () => {
    //lógica de javascript

    const[numero,setNumero]=useState(0);

    
    return ( 
        <Fragment>
             <h3>Mi web {numero}</h3>
            <button onClick={()=>setNumero(numero+1)}>Aumentar</button>
        </Fragment>
     );
}   
 
export default Contador;