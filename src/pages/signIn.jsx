import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import Layout from '@/modules/layout/Layout';
import styled from '@emotion/styled';

const TextField = styled(FormControl)`
    padding: 6px;
    width: 80%;
`
const SignBtn = styled(Button)`
    background-color: #f5b112 !important;
    border: 1px solid #f5b112 !important;
    width: 80% !important;
    height: 50px !important;
    border-radius: 10px !important;
    color: #000 !important;
    cursor: pointer !important;
    font-size: 15px !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
`
const FaceBookBtn = styled(Button)`
    background: #fff !important;
    color: #4470bf !important;
    cursor: pointer !important;
    font-size: .9em;
    font-weight: 700;
    align-items: center;
    width: 80% !important;
    height: 50px;
    border: none;
    padding:8px 12px !important;
    border-radius: 10px !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SignIn = (props) => {
    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    }

    useEffect(() =>{
        console.log('signin');
    })

    return (
        <Layout>
            <div className="signIn">
                <div className="signIn-field">
                    <div className="signIn-left"><img src="/imgs/signBackground.png"/></div>
                    <div className="signIn-right">
                        <div className="title">Sign in to continue</div>
                        {/* <TextField id="standard-basic" label="Email Address" /> */}
                        <TextField>
                            <InputLabel htmlFor="standard-adornment-password" style={{color:"#767474", fontSize:14}}>Email Address</InputLabel>
                            <Input
                                style={{color: "white"}}
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                            />
                        </TextField>
                        <TextField>
                            <InputLabel htmlFor="standard-adornment-password" style={{color:"#767474", fontSize:14}}>Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    style={{color:"#b6b2b2"}}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </TextField>

                        <div className="remember-field">
                            <div className="rememberMe">
                                <Checkbox name="gilad" style={{color:"white", fontSize:15}}/>
                                <div className="rememberMe-text">Remember me?</div>
                            </div>
                            <div className="forgotPassword-text">Forgot Password</div>
                        </div>
                        <SignBtn variant="contained" color="yellow">SIGN IN NOW</SignBtn>
                        <FaceBookBtn variant="contained">
                            <FacebookIcon className="sign" style={{ fontSize: 25, color: "#4470bf"}}/>
                            Login with Facebook
                        </FaceBookBtn>
                        <div className="signUpBtn">
                            Do not have an account?<a href="/signUp">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default SignIn;