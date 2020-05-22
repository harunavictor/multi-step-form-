import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetail extends React.Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const {values,handleChange}= this.props
        return <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField
                    hintText="Enter Your FirstName"
                    floatingLabelText="First Name"
                    onChange={handleChange('firsName')}
                    defaultValue={values.firstName}
                /> <br/>
                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={StyleSheet.button}
                    onClick={this.continue}
                />

            </React.Fragment>
        </MuiThemeProvider>;
    }
}
const styles = {
    button: {
        margin:15
    }
}
// FormUserDetail.propTypes = propTypes;
// FormUserDetail.defaultProps = defaultProps;
// #endregion

export default FormUserDetail;