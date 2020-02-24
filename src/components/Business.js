import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const Business = (props) => {
    const id = parseInt(props.match.params.id)
    const business = props.businesses.find(business => business.id === id)

    return (
        <Container maxWidth="sm" className="business-container">
            <Paper className="business-paper">
                <h2>{business.name}</h2>
                {
                    Object.keys(business).map((key) => {
                        return <Chip label={`${key}: ${business[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Business