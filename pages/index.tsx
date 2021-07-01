import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'
import { useGetHomePage } from '../apollo/actions'





    
 const homePage:React.FC = () => {
  
    
    return (
        <div>
         
            <Home />
        </div>
)
}


export default  withApollo(homePage)


