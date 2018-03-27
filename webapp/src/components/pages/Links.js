
import React, { Component } from 'react';
import profile_pic from '../../profile_pic.jpeg';
import '../../App.css';
import RaisedButton from 'material-ui/RaisedButton';





export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const style = {
            margin: 20,
        };
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Profile-Area">
                        <img src={profile_pic} className="Profile-pic" alt="logo" />
                        <h1 className="App-title">Johnathan Saunders</h1>
                    </div>

                    <div className="Info-Selection">
                        <RaisedButton label="Portfolio" secondary={true} style={style} onClick={()=> window.location.assign('/portfolio')} />
                        <RaisedButton label="Resume" secondary={true} style={style} onClick={()=> window.location.assign('/resume')} />
                        <RaisedButton label="Contact" secondary={true} style={style} onClick={()=> window.location.assign('/contact')}/>
                        <RaisedButton label="Links" secondary={true} style={style} onClick={()=> window.location.assign('/links')}/>
                    </div>

                </header>
                <h1>About Me</h1>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}


