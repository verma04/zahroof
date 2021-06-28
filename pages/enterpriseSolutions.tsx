import React from 'react'
import Home from '../components/enterpriseSolution/enterprise'
import withApollo from '../hoc/withApollo'
 const ValueasHero:React.FC = () => {
    return (
        <div>
            <Home/>
        </div>
    )
}


export default  withApollo(ValueasHero)