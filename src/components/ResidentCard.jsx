import React, { useEffect, useState } from 'react';
const ResidentCard = ({ residentUrl, index }) => {
    // State variables to manage resident details, loading state, error state, and toggle flag
    const [residentDetails, setResidentDetails] = useState();
    const [flag, setFlag] = useState(false);

    // Fetch resident details when component mounts
    useEffect(() => {
        getResidentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    // Function to fetch resident details from the provided URL
    const getResidentDetails = async () => {
        try {
           
            let res = await fetch(residentUrl);
            res = await res.json();
           
            setResidentDetails(res);
        } catch (e) {
            console.log(e);
            
        } 
    };

    // Render resident card with details and toggle functionality
    return (
        <div style={{ position: 'relative' }}>
            <button className='btn' onClick={() => setFlag(!flag)} > <p>Resident {index + 1}<span style={{ fontSize: '15px',paddingLeft:'11px' }}>&rarr;</span></p></button>
            {flag && <div style={{ position: 'absolute', zIndex: 10, background: 'lightYellow', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding: '0px 5px', border: '1px solid blue', borderRadius: '5px', minWidth:'100px' }}>
                <h5 style={{ color: 'blue' }}>Resident Number: {index + 1}</h5>
                <h5>Name: {residentDetails?.name}</h5>
                <p style={{ color: 'blue' }}>Height: {residentDetails?.height}</p>
                <p style={{ color: 'blue' }}>Mass: {residentDetails?.mass}</p>
                <p style={{ color: 'red' }}>Gender: {residentDetails?.gender}</p>
            </div>}
        </div>
    );
}

export default ResidentCard;
