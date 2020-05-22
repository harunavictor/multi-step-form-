import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

class Success extends React.Component {
    continue = (e) => {
        e.preventDefault();
        //form process i.e where data can be sent to an api
        this.props.nextStep();
    };
    back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
    
    render() {
        return <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success" />
                <h1>Thank You For Your Submission!</h1>
                <p>You Will Get An Email With further Instructions</p>
            </React.Fragment>
        </MuiThemeProvider>;
    }
}


export default Success;