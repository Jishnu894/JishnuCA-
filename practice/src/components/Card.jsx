import React from 'react'
import Title from './Title'


const Card = () => {

    const items = [
        {
            id:'1',
            Name: 'Jishnu',
            Title: 'Frontend Developer'
        },
        {
            id: '2',
            Name: 'Arun',
            Title: 'Backend Developer'
        },
        {
            id: '3',
            Name: 'Sree',
            Title: 'Fullstack Developer'
        }
    ]
    
    return (
        <div>
            {items.map((e)=>(
                <Title key = {e.id} props={e.items}/>
            ))}
        </div>
    )
    }
export default Card