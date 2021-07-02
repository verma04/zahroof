import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'

import { getDataFromTree } from '@apollo/react-ssr';




 const homePage = () => {
   
    
 
    
    return (
        <div>
         
            <Home data={home} />
        </div>
)
}

export default withApollo(homePage, {getDataFromTree});


