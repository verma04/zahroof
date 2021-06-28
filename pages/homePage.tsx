import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'
 const homePage:React.FC = () => {


  
    return (
        <div>
            
            <Home/>
        </div>
    )
}


export default  withApollo(homePage)