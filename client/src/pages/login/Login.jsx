import React, {useState} from "react"; 
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Stack, IconButton, InputAdornment, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../components/hook-form';

// import {Form, Button} from 'react-bootstrap';
// import { setUser } from "../../utils/user";
import MenuComponent from "../../components/Menu/Menu";
import FooterComponent from "../../components/Footer/Footer";


import { ReCaptchaProvider, ReCaptchaV3, ReCaptchaV2 } from "react-recaptcha-x";


import './style.css';
import { loginUser } from "../../apis/auth";


const Login = () => { 

  const navigate = useNavigate();
  // const [validated, setValidated] = useState(false);
  // const setUset = ()=>{
  //   setUser({ id: '1', name: 'robin', token:"nkabdh23g8o423hbb23hjkb8g23h4b233g43h2b7932o" })
  //   navigate("/dashboard");
  // }  
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   const formData = {
  //     email: emailValue,
  //     password: passwordValue,
  //   }
  //   loginUser(formData)
  //   .then((res)=>{
  //     console.log(res)
  //   })
    
  //   setValidated(true);
  // };


  const [ showPassword, setShowPassword ] = useState(false);
  const [ recaptcha, setRecaptcha ] = useState(null);
  

  const publicKey = "6Leq3r4UAAAAAMkk_R0hCXWGAqXY7SNuE13KEe00";
  const callback = (token, refreshFunc) => {
    console.error(token, refreshFunc);
    if (typeof token === "string") {
      console.error(token);
      setRecaptcha(token)
    }
  };

  const getReCaptcha = (publicKey, callback) => {
    return (
      <ReCaptchaProvider siteKeyV2={publicKey}>
        {/* <ReCaptchaV3 action="resultsPage" callback={callback} /> */}
        <ReCaptchaV2
          callback={callback}
          id="my-id"
          data-test-id="my-test-id"
          tabindex={0}
        />
      </ReCaptchaProvider>
    );
  };


  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (value) => {

    if(recaptcha) {
      const email = value.email;
      const password = value.password;
      const formData = {
        email,
        password,
      }

      loginUser(formData)
      .then((res)=>{
        console.log(res)
        if(res.token) {
          // localStorage.setItem("token", res.token)
          navigate("/dashboard")
        } else {
          toast.error(res.errors.msg)
        }
      })
    } else {
      toast.error("You must prove you are n't bot")
    }

  }

  return (
    <>
      <MenuComponent />

      <div className="login-wrapper">
        <div className="login-container">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField 
              name="email" 
              label="Email address" 
            />

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <RHFCheckbox name="remember" label="Remember me" />
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Login
          </LoadingButton>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <Typography sx={{ fontSize: '15px' }}>
              You don't have account?
            </Typography>
            <Link 
              variant="subtitle2"
              underline="hover" 
              href="/register"
              sx={{
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Sign Up
            </Link>
          </Stack>

        </FormProvider>
        <ToastContainer />

       
        <div className="App">
          <div>Checking no robot</div>
          {getReCaptcha(publicKey, callback)}
        </div>

          {/* <Form 
            noValidate 
            validated={validated} 
            onSubmit={handleSubmit} 
          > 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                required 
                type="email" 
                placeholder="Enter email" 
                onChange={(e)=>setEmailValue(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please input a valid Email address.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                required 
                type="password" 
                placeholder="Password" 
                onChange={(e)=>setPasswordValue(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please input password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form> */}
        </div>
      </div>
      
      <FooterComponent />
      {/* <button onClick={setUset} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Loggedin</button> */}
    </>
  )
}

export default Login;