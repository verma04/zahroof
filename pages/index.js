import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'





 const homePage = () => {
    
    
 
    
    return (
        <div>
         
            <Home  />
        </div>
)
}

export default withApollo(homePage);


