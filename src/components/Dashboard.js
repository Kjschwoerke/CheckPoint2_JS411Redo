import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Total from '../containers/Total'
import AddBusiness from '../containers/AddBusiness'
 
const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="business-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                <Total />
                <AddBusiness businessTotal={props.businesses.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                    <TableRow key={business.id}>
                        <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell>
                        <TableCell>{business["name"]}</TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        <TableCell>{business["hours"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeBusiness(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard