import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, IconButton, InputAdornment, Typography, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import { FormProvider, RHFTextField } from '../../components/hook-form';
import { registerUser } from '../../apis/auth';
import MenuComponent from '../../components/Menu/Menu';
import FooterComponent from '../../components/Footer/Footer';
import "./style.css";

// ----------------------------------------------------------------------

export default function Register() {
  const navigate = useNavigate();
  const [ showPassword, setShowPassword ] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (value) => {
    const firstName = value.firstName;
    const lastName = value.lastName;
    const email = value.email;
    const password = value.password;
    const formData = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    }
    
    registerUser(formData)
    .then((res)=> {
      console.log("ressss", res)
      if(res.status === "success") {
        // navigate('/login', { replace: true });
      } else {
        toast.error(res.msg)
      }
    })

    // if(user) {
    //   toast.error("User already exsit");
    //   return;
    // }

  };

  return (
    <>
      <MenuComponent />
      <div className="register-wrapper">
        <div className="register-container">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="firstName" label="First name" />
                <RHFTextField name="lastName" label="Last name" />
              </Stack>

              <RHFTextField name="email" label="Email address" />

              <RHFTextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                Register
              </LoadingButton>

              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                  <Typography sx={{ fontSize: '15px' }}>
                    You already have account?
                  </Typography>
                  <Link 
                    variant="subtitle2"
                    underline="hover" 
                    href="/login"
                    sx={{
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Log In
                  </Link>
                </Stack>
            </Stack>

            {/* <ToastContainer /> */}
          </FormProvider>
          <ToastContainer />
        </div>
      </div>
      <FooterComponent />
    </>    

  );
}
