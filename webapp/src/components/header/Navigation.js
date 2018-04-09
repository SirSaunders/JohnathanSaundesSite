import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NavBar from '../CustomComponets/NavBar'
export default class Navigation extends React.Component {
    constructor() {
        super();

    }

    componentWillMount() {

    }
    componentDidMount() {


    }


    render () {

        const menuItems = [{title: 'Home Page', path:'/'},
            {title:'Portfolio', path:'/portfolio'},
            {title:'Resume', path:'/resume'},
            {title:'Contact', path:'/#contact'},
            {title:'Links',path:'/#links'}]

        return (
            <div  >
                <NavBar
                title='Johnathan Saunders'
                menuItems={menuItems}/>
            </div>
        )
    }

}
