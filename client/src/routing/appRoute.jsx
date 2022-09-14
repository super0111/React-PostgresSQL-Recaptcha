import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "../pages/login/Login";
import Register from '../pages/register/Register';
import Dashboard from "../pages/dashboard/dashboard";
import ROUTES_URL from "../routing/url";
import Recaptcha from "../pages/recaptcha";
import PrivateRoutes from '../utils/privateRoutes';
import ProtectedRoute from "./protectedRoute";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<PrivateRoutes/>}>
          <Route path="/" element={<Dashboard name={"SampleName"} />} />
        </Route>
        <Route path='/login' element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        {/* <Route exact path='/recaptcha' element={<Recaptcha />} /> */}
        <Route path="/:optiontype" element={<Dashboard name={"SampleName"} />} />
        <Route
            path={ROUTES_URL.LOGIN}
            element={ <Login /> }
        />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default AppRoute;