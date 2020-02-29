import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="card-container">
            {props.businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                    <Link to={`/business/${business.id}`}><span>{business.name.toUpperCase()}</span></Link>
                        <ul className="businessListHome">
                        <li>Description: {business["description"]}</li>
                        <li>Address: {business["address"]}</li>
                        <li>Hours: {business["hours"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home