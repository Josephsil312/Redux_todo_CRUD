import React from "react";
<<<<<<< HEAD
import { TextField, Grid, Paper } from "@material-ui/core/";
=======
import {  Grid } from "@material-ui/core/";
>>>>>>> 0023b71 (add changes)
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";



function Home(props) {
  console.log(props);
  return (
<<<<<<< HEAD
   
      <Grid container justify = 'center' alignItems = 'center' >
        <Grid container item xs={6} >
          <Grid item xs={12}>
            <TodoInput />
          </Grid>
          <Grid item xs={12} item style={{ border: "0.2px solid grey" }}>
            <TodoList />
          </Grid>
        </Grid>
      </Grid>
    
=======


    <Grid container justify='center' alignItems='center'>
      <Grid container item xs={6} >
        <Grid item xs={12}>
          <TodoInput />

        </Grid>
        <Grid item xs={12} item style={{ border: "0.2px solid grey", margin: '50px' }}>
          <TodoList />
        </Grid>
      </Grid>
    </Grid>


>>>>>>> 0023b71 (add changes)
  );
}

export default Home;
