import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'
import { useGetHomePage } from '../apollo/actions'
import { getDataFromTree } from '@apollo/react-ssr';




    
 const homePage = () => {
    const { data } = useGetHomePage();

    const home = (data && data.home)  || [];

     
    
 
    console.log(home)
    
    return (
        <div>
         
            <Home />
        </div>
)
}

export default withApollo(homePage, {getDataFromTree});


