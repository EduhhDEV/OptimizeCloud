import { Redirect } from "../components/Redirect";
import Main from "../pages/Home";
import Terms from "../pages/Terms";
import Vps from "../pages/Vps";
import { styled } from "../styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

const OptimizeApplication = styled("div", {
  
});

const AppContainer = styled("div", {
  position: "relative",
  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
});

const Router: React.FC = () => (
  <OptimizeApplication>
    <AppContainer>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/serversvps" element={<Vps/>}/>
          <Route path="/terms" element={<Terms/>}/>

          <Route path="/discord" element={<Redirect url={"https://discord.gg/hHtrdcaPsX"}/>}/>
        </Route>
      </Routes>
    </AppContainer>
  </OptimizeApplication>
);
export default Router;
