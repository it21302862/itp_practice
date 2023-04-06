import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2- mb-2'>
                    <button className='btn btn-primary'>Add data</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sanaya Samadhi</td>
                            <td>sanayasamadhi@gmail.com</td>
                            <td>Software Engineer</td>
                            <td>0775702825</td>
                            <td className="d-flex justify-content-between">

                                <button className='btn btn-success'>View<RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'>Update<CreateIcon/></button>
                                <button className='btn btn-danger'>Delete<DeleteIcon/></button>

                            </td>
                        </tr>


                        <tr>
                            <th scope="row">2</th>
                            <td>Sanaya Samadhi</td>
                            <td>sanayasamadhi@gmail.com</td>
                            <td>Software Engineer</td>
                            <td>0775702825</td>
                            <td className="d-flex justify-content-between">

                                <button className='btn btn-success'>View<RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'>Update<CreateIcon/></button>
                                <button className='btn btn-danger'>Delete<DeleteIcon/></button>

                            </td>
                        </tr>
                      
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home