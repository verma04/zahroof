import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'
import { useGetHomePage } from '@/apollo/actions'
import { getDataFromTree } from '@apollo/react-ssr';




 const homePage = () => {
    const { data } = useGetHomePage();

    const home = data && data.page  || [];

       
    console.log(home)
    
 
    
    return (
        <div>
         
            <Home data={home} />
        </div>
)
}

export default withApollo(homePage, {getDataFromTree});


