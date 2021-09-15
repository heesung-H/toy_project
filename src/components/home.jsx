import React from 'react';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();

    return (
        <>
         <h1>home</h1>
         <button onClick={() =>{
            history.push('/profile');
         }}>go to pro</button>
        </>     
    );
}


export default Home;