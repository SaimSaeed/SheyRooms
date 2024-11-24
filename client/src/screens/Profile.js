import React, { useEffect, useState } from 'react'
import { Container, ListGroup, Row, Col, Card, Button, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'

function Profile() {

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const user = localStorage.getItem("currentUser")
    const userBookings = bookings.map(booking => booking?.currentbookings?.userid === user._id ? booking : [])
    console.log(userBookings)
    useEffect(() => {
        const getBookings = async () => {
            try {
                setLoading(true)
                const res = await axios.get("http://localhost:5000/api/bookings/")
                setBookings(res.data)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }

        }
        getBookings()


    }, [user._id])

    return (
        <Container >
            <Row>
                <Col xs={12} md={4}>

                    <h2 className='my-2'>My Profile</h2>
                    <Form className='w-75'>
                        <Form.Label id='username'  className='my-1'>Username</Form.Label>
                       <FormControl type="text" name='username' placeholder='Username...'>
                       </FormControl>
                       <Form.Label id='email'  className='my-1'>Email</Form.Label>
                       <FormControl type="text" name='email' placeholder='Email...'>
                       </FormControl>
                       <Form.Label id='password'  className='my-1'>Password</Form.Label>
                       <FormControl type="password" name='password' placeholder='Password...'>
                       </FormControl>
                       <Form.Label id='cpassword'  className='my-1'>Confirm Password</Form.Label>
                       <FormControl type="password" name='cpassword' placeholder='Confirm Password...'>
                       </FormControl>
                       <Button type="submit" variant='dark' className='my-3'>Update</Button>
                    </Form>

                </Col>
                <Col xs={12} md={8}>
                    {
                        loading ? <Loader /> : error ? <Error /> : <Row>
                            <h2 className='my-2'>Bookings</h2>
                            {
                                userBookings.map((booking) => (


                                    <Col md={6}>
                                        <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    {booking.room.substring(0, 40)}..
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Booking ID:  {booking._id}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Transaction ID:  {booking.transactionid}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Check In:  {booking.fromdate}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Check Out:  {booking.todate}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Amount:  {booking.totalamount}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Status:  {booking.status}
                                                </ListGroup.Item>
                                                <ListGroup.Item className='d-flex justify-content-end'>
                                                    <Button variant='dark' >
                                                        Cancel Booking
                                                    </Button>
                                                </ListGroup.Item>

                                            </ListGroup>
                                        </Card>
                                    </Col>


                                ))
                            }



                        </Row>
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default Profile