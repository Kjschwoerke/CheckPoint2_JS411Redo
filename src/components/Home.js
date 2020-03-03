import React from 'react'
// import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const Home = (props) => {
    let loggedIn = document.cookie

    console.log('Home Page Cookie State' + document.cookie)

    // if (loggedIn == 'loggedIn=true'){
        return (
            <Container maxWidth="lg" className="business-container">
                <div className="flex-container">
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>
                            {loggedIn == 'loggedIn=true' && (<TableCell>Delete</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.businesses.map((business, idx) => (
                        <TableRow key={business.id}>
                            <TableCell component="th" scope="row">
                                {business.id}
                            </TableCell>
                            <TableCell><Link to={`/business/${business.id}`}>{business["name"]}</Link></TableCell>
                            <TableCell>{business["description"]}</TableCell>
                            <TableCell>{business["address"]}</TableCell>
                            <TableCell>{business["hours"]}</TableCell>
                            {loggedIn == 'loggedIn=true' && (<TableCell>
                                <DeleteIcon
                                    // add onClick method here
                                    onClick={() => props.removeBusiness(idx)}
                                    className="icon text-red" />
                            </TableCell>)}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Container>
        )
}

export default Home