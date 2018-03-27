
import React, { Component } from 'react';
import profile_pic from '../../profile_pic.jpeg';
import '../../App.css';
import RaisedButton from 'material-ui/RaisedButton';





export default class ResumePage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div >
                <embed src="/John_s_Resume.pdf" width="100%" height={'1000px'}/>
            </div>
            )
    }
}


