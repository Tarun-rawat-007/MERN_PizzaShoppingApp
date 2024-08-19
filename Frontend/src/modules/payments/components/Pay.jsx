// import React from 'react'

import { useState } from "react";
import { OAuth } from "../../../shared/services/Ouath";
import UserInfo from "../../user/pages/UserInfo";



const Pay = () => {
    const [user,setUser]=useState(null);
    
    const orderNow =async()=>{
        // gmail login
        const usercred=await OAuth();
        console.log('User Info',usercred);
        // fill info
        
        setUser(usercred.user);
        
        //pay now --->db store info

    }
  return (
   <>
   {!user &&<button onClick={orderNow } className="btn btn-primary">Order Now  </button>}
   {user && <UserInfo email={user.email} name={user.displayName}image={user.photoURL}></UserInfo>}
   </>
   
    
  )
}

export default Pay