import React from "react";
import { Grid, Box } from "@material-ui/core";
import Clima from "../../assets/img/clima.png";
import "./Header.scss";
import Mundo from "../../assets/img/mundo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Link to="/">
            <Box id="titulo">
              <img src={Clima} alt="logo" id="logo" />
              <h1>Ciudad X Clima</h1>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}id='container-mundo'>
          <Box id="mundo">
            <img src={Mundo} alt="logo" />
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;
