import React from 'react';
import { useHistory } from 'react-router';

const Profile = (props) => 
{
    const history = useHistory();

    return(
       <>
        <h1>profile</h1>
        <button onClick={() => {
            history.push("/");
        }}>go to pro</button>
       </>     
    );
}
export default Profile;