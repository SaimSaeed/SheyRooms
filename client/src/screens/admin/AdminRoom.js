import React, { useEffect, useState } from 'react'
import { Form, FormControl, Button, Container } from "react-bootstrap"
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useParams } from 'react-router-dom'
function AdminRoom() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const params = useParams()
    const { id } = params

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = (await axios.get(`http://localhost:5000/api/users/${id}`)).data
                setUsername(res.name)
                setEmail(res.email)
                setIsAdmin(res.isAdmin)
            } catch (error) {
                toast.error(error)
            }
        }
        getUser()
    }, [id])





    const updateHandler = async (e) => {
        e.preventDefault()
        if (password !== cPassword) {
            return toast.error("Passwords do not match!")
        }
        try {
            setLoading(true)
            await axios.put(`http://localhost:5000/api/users/${id}`, { name: username, email, password,isAdmin })
            toast.success("Updated User!")
            setLoading(false)
            window.location.reload()
        } catch (error) {
            setLoading(false)
            toast.error(error)
            setError(true)
        }


    }

    return (


        <Container>
            <ToastContainer/>
            <h2 className='my-2 text-center'>Edit Room</h2>
            {loading && <Loader />}
            {error && <Error />}
            <Form className='w-50 mx-auto' onSubmit={updateHandler}>
                <Form.Label id='username' className='my-1'>Title</Form.Label>
                <FormControl type="text" name='username' placeholder='Username...' value={username} onChange={e => setUsername(e.target.value)}>
                </FormControl>
                <Form.Label id='email' className='my-1'>Description</Form.Label>
                <FormControl type="text" name='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)}>
                </FormControl>
                <Form.Label id='email' className='my-1'>Type</Form.Label>
                <FormControl type="text" name='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)}>
                </FormControl>
                <Form.Label id='email' className='my-1'>Rent (Per Day)</Form.Label>
                <FormControl type="text" name='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)}>
                </FormControl>
                <Form.Label id='email' className='my-1'>Phone No</Form.Label>
                <FormControl type="text" name='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)}>
                </FormControl>
                <Form.Label id='email' className='my-1'>Max Count</Form.Label>
                <FormControl type="text" name='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)}>
                </FormControl>
                

                <Button type="submit" variant='dark' className='my-3'>Update</Button>
            </Form>

        </Container>
    )
}

export default AdminRoom