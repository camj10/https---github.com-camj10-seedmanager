import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
const SeedDetails = () => {
    const { id } = useParams()
    const [seed, setSeed] = useState({})

    useEffect(() => {

        const getSeed = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/seed/${id}`);
            setSeed(respuesta.seed);
        }
        getSeed();
    }, [id])

    return (
        <div className='container'>
            <div className='card text-center mt-5 '>
                <div className='card-header bg-black text-white'>
                    <h1>Detalles</h1>
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>Detalles </h3>
                    <div className="container-items-detalles mb-2">
                        <h5 className="card-text">Variedad: {seed.variedad}</h5>
                        <h5 className="card-text">Tipo de semilla: {seed.semilla} </h5>
                        <h5 className="card-text">Cantidad: {seed.cantidad} </h5>
                        <h5 className="card-text">Descripción: {seed.descripcion} </h5>
                    </div>
                    <div className="card-footer bg-black text-white" >
                        <p className="card-text">Fecha: {seed.fecha}</p>
                        <div>
                            <Link className='btn btn-primary' to='/seed'>Volver <i className="bi bi-house-up-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeedDetails