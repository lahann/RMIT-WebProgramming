import React from 'react'
import Hello from './Hello.jsx'
import Greeting from './Greeting.jsx'
import Bye from './Bye.jsx'
import StudentForm from './StudentForm.jsx'
import Product from './Product.jsx'

const Afunction = bla => {
    return(
        <div>Returned a div {bla.name}</div>
    )
}

export default class App extends React.Component{
    render(){
        return(
            <div>
            <StudentForm />
            <Afunction name="This is the name"/>



            </div>
            
            )
    }
}
