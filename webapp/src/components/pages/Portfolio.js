
import React, { Component } from 'react';
import profile_pic from '../../profile_pic.jpeg';
import '../../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';





export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

            const style = {
                width: '80%',
                marginTop:'50px',
                marginLeft: "auto",
                marginRight: "auto"
            };

        function CardItem(props) {
           return <div style={style}>
                <Card >
                    <CardMedia overlay={<CardTitle title={props.title} subtitle={props.subTitle} />}>
                        <img className="Crop-Fit" height='400px'  src={props.image} alt="" />
                    </CardMedia>
                    <CardText>
                        {props.description}
                    </CardText>
                    <CardActions>
                        <FlatButton label={props.btnLabel} onClick={()=>window.open(props.btnLink)}/>
                    </CardActions>
                </Card>
            </div>;
        };
        const bodyStyle={
            paddingBottom:"50px"
        }

        return(
            <div  style={bodyStyle}>
                    <CardItem
                        title="Cogniscreen"
                        subTitle="Full Stack Engineer"
                        image="/cogniscreen.png"
                        description=" Cogniscreen is a provider of digital neuropsychological
                        assessment technology for early identification of emergent dementia and
                        dementia-related illness."
                        btnLabel="View Site"
                        btnLink="https://www.cogniscreen.com"
                    />

                <CardItem
                    title="Texter"
                    subTitle="Software Engineer"
                    image="/texter.png"
                    description=" Texter is simple, easy to use, feature rich, SMS/MMS /IM application. Just open up Texter,
                    verify your number, and setup is done. Texter will intelligently switch between IM, SMS, and MMS
                    message sending, based on who you are messaging."
                    btnLabel="View in Play Store"
                    btnLink="https://play.google.com/store/apps/details?id=us.mordor.AndroidMessenger"
                    />

                <CardItem
                    title="Rowan ACM App"
                    subTitle="Software Engineer"
                    image="/AcmApp.png"
                    description=" The official app of Rowan University ACM"
                    btnLabel="View in App Store"
                    btnLink="https://itunes.apple.com/us/app/rowan-acm/id1254986203?platform=iphone&preserveScrollPosition=true#platform/iphone"
                />
            </div>


    );

    }
}


