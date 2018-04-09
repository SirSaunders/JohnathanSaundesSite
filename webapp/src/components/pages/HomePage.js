
import React, { Component } from 'react';
import profile_pic from '../../profile_pic.jpeg';
import '../../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from "css-select";





export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        const aboutSection={
            columnCount:"2",
        }
        const linkBtn ={
            margin: 12,

        }

        return (
            <div className="App App-Background" >
                <header className="App-header">
                    <div >
                        <img src={profile_pic} className="Profile-pic" alt="logo" />
                        <h1 className="App-title">Johnathan Saunders</h1>
                    </div>

                </header>
                <h1>About Me</h1>
                <div className="About-Section" style={(window.innerWidth < 500)? {}:aboutSection}>
                    <p className="App-intro" >
                        I am currently a full stack  software engineer for Cogniscreen, and full-time graduate student
                        at Rowan University for a M.S. in Computer Science (expected graduation May 2018). I lead the development
                        of Cogniscreen's iOS app, website, server, and database. My background includes Android, iOS, backend,
                        and web  development.
                    </p>
                    <p >
                        I enjoy developing for the whole development stack, working on each part, and understanding how it all comes together.
                        I am somewhat new to the development community, so I have been a bit of everything trying to find out what my true passion is
                        - as of now I seem to be passionate about pretty much everything (expect cryptography).
                    </p>
                    <p >
                        My self-motivated mindset and my obsession with solving problems has attributed to the the successful deployment of
                        Cogniscreen in to several new Doctors' practices.
                    </p>
                    <p>
                        Meanwhile, I have vastly improved the organization of issue tracking and overall organization of the code base.
                        I believe that every bug found needs to be marked as an issue, every new feature requested should be marked as an issue,
                        and every issue resolution should be easily traceable - what branch is it or was it in, when was it marked as resolved.
                    </p>
                    <p>
                        If you have not done so already, please checkout   <a href="/portfolio">my portfolio</a>
                    </p>

                </div>

                <h1 id="contact">Contact Me</h1>
                <div className="Contact-Me">
                    <p className="App-intro">
                        <ul className="Contact-Me-List">
                        <li> Email: <a href="mailto:saundersokj@gmail.com">saundersokj@gmail.com</a></li>
                           <li> Mobile: <a href="tel:(856)238-1228">(856)238-1228</a></li>
                        </ul>
                    </p>
                </div>
                <h1 id="links">Links</h1>
                <RaisedButton
                    style={linkBtn}
                    onClick={()=>window.open('https://github.com/SirSaunders')}
                    label="Github"
                        labelPosition="before"
                        primary={true}
                        icon={<img  width={'35'} height={'35'} src="/github.svg"/>}

                />
                <RaisedButton
                    style={linkBtn}
                    label="Gitlab"
                    labelPosition="before"
                    primary={true}
                    onClick={()=>window.open('https://gitlab.com/SirSaunders')}
                    icon={<img  width={'35'} height={'35'} src="/gitlab.png"/>}

                />
                <RaisedButton
                    style={linkBtn}
                    label="Linkedin"
                    labelPosition="before"
                    primary={true}
                    onClick={()=>window.open('https://www.linkedin.com/in/johnathan-saunders/')}
                    icon={<img  width={'25'} height={'25'} src="/linkedin.svg"/>}

                />
            </div>
        );
    }
}


