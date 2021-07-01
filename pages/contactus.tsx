import React from 'react'
import Contact from '../components/contactus/contact'
import withApollo from '../hoc/withApollo'
 const index:React.FC = () => {
    return (
        <div>
            <Contact/>
        </div>
    )
}


export default  withApollo(index)