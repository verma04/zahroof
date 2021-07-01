import React from 'react'
import Esg from '../components/esg/esg'
import withApollo from '../hoc/withApollo'

 const index:React.FC = () => {
    return (
        <div>
            <Esg/>
        </div>
    )
}


export default withApollo(index)