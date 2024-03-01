import React from 'react';
import ResidentCard from './ResidentCard';

// PlanetCard component responsible for displaying details of a planet
const PlanetCard = ({ name, climate, population, terrain, residents }) => {
    return (
        <div className='box'>
           <div style={{backgroundColor:'blue',paddingBottom:'20px',width:'100%',paddingTop:'0.1px',borderRadius:'25px 25px 0 0'}}>
            <h2 style={{ color: 'white' }}>Planet Name: <span style={{ color: 'gold' }}>{name}</span></h2>
            <p style={{color:'yellow'}}>Climate: {climate}</p>
            <p style={{ color: 'yellow' }}>Population: {population}</p>
            <p style={{ color: 'yellow' }}>Terrain: {terrain}</p>
            </div>
            <div>
                <h4 style={{ color: 'navy' }}>Residents: {residents.length}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }}>
                    {(residents && residents.length > 0) ? residents?.map((residentUrl, index) =>
                        <ResidentCard key={index} residentUrl={residentUrl} index={index} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default PlanetCard;