import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Reponer from '../../components/Reponer'

const Seed = () => {
    const [seed, setSeed] = useState([]);//un arreglo vacio
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/seed`);
            setSeed(respuesta.data);
        }
        getData();

    }, [])
    return (
        <div className='home'>
            <div>
                <div>
                    <h1>Seed manager</h1>
                    <p>Your perfect seed manager</p>
                </div>
                <div>
                    <Link to={'/seed/new'}>Add new seed</Link>
                </div>
            </div>
            <div>
                <div>
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Variedad</th>
                                <th scope="col">Semilla</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Stock critico</th>
                                <th scope="col"> Agregar stock</th> 
                                {/* Tiene que ser un boton */}
                                <th scope="col">Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seed.map((seed,index)=>{
                                    <tr key={index}> 
                                    <tr>
                                        <td>{seed.fecha}</td>
                                        <td>{seed.variedad}</td>
                                        <td>{seed.semilla}</td>
                                        <td>{seed.cantidad}</td>
                                        <td>{seed.stockcritico<(seed.cantidad)?<span className='status C1'>Correcto</span>:(seed.cantidad===0)?<span className='status C2'>Agotado</span>:<span className='status C3'>Critico</span>}</td>
                                        <td><Reponer id={seed.id} unidadesA={seed.cantidad}/></td>
                                        <td>{seed.descripcion}</td>
                                        <td> 
                                            <Link to={`/seed/${seed._id}/edit`}>Editar</Link>
                                            <Link to={`/seed/${seed._id}`}>Detalle</Link>
                                        </td>
                                    </tr>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>  
                </div> 
            </div>
        </div>
    )
}

export default Seed