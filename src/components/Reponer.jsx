import { useOutletContext } from 'react-router-dom';
import {Swal} from 'sweetalert2';
import axios from 'axios'
const Reponer = ({id, cantidadA})=>{
    const{setActivador}= useOutletContext();
    const envio = async ()=>{
        try{
            const{value: cantidad} = await Swal.fire({
                title: 'cuantos kg desea agregar a la cantidad',
                input:'number',
                inputLabel:'cantidad',
                inputPlaceholder: 'Ingrese la cantidad a ser agregada',
                inputAttributes: {
                                maxlength: 10,
                                autocapitalize: 'off',
                                autocorrect: 'off'
                                }
            })
            if(Number(cantidad)){
                const actualizacion=await axios.put(`${process.env.MONGO_URL}/api/reponer/${id}`,{'cantidad':(Number(cantidad)+cantidadA)})
                setActivador([id])
                console.log(actualizacion)
                console.log(cantidad)
                Swal.fire(`Correcto: ${cantidad}`)
                                }
                
            }
        catch (error){
            console.log(error)
        }
    }
    return(
        <button onClick={envio} className='btn btn-primary'> Reponer</button>
    )
}
export default Reponer