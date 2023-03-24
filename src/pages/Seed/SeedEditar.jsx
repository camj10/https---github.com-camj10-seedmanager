import React, { useEffect, useState } from 'react'
import SeedForm from '../../components/SeedForm'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';


const SeedEditar = () => {
  const initialValues = {
    fecha:'',
    variedad:'',
    semilla:'',
    cantidad: 0,
    stockcritico: 0,
    descripcion: ''
  }
const navigate = useNavigate();
const { id } = useParams;
const [datos, setDatos] = useState([]);

const getSeed = async () => {
    const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/seed`);
    setDatos(respuesta.data)
}
  useEffect(() => {
    getSeed()
  }, [id])
  


  const editarSeed = async(values, actions) => {

    try {
        const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/seed/${id}`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado perfectamente!`,
            });

            actions.resetForm(initialValues);
            navigate('/data')
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

  const options = ['Tempranera','Tardia','Otros']

  return (
    <>
        <hr className='mt-5'/>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <SeedForm 
                  initialValues={datos}
                  botonTexto="Agregar"
                  onSubmit={editarSeed}
                  options={options}
                />
            </div>
        </div>
    </>
  )
}

export default SeedEditar