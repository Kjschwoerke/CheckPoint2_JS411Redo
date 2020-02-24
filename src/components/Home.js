import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="card-container">
            {props.businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{business.name.toUpperCase()}</span>
                        <ul>
                        <li>Miles per Gallon: {business["description"]}</li>
                        <li>Cylinders: {business["address"]}</li>
                        <li>Horsepower: {business["hours"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home