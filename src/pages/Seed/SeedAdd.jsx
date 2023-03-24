import React from 'react'
import SeedForm from '../../components/SeedForm'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const SeedAdd = () => {
  const initialValues = {
    fecha:'',
    variedad: '',
    semilla: '',
    cantidad: 0,
    descripcion: ''
  }
const navigate = useNavigate();

  const crearSeed = async(values, actions) => {

    try {
        const respuesta = await axios.post(`http://localhost:8000/api/seed`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado perfectamente!`,
            });

            actions.resetForm(initialValues);
            navigate('/seed')
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  const options = ['Tempranera','Tardía','Otros']

  return (
    <>
        <hr className='mt-5'/>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <SeedForm 
                  initialValues={initialValues}
                  botonTexto="Agregar"
                  onSubmit={crearSeed}
                  options={options}
                />
            </div>
        </div>
    </>
  )
}

export default SeedAdd