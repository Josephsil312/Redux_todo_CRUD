import React from "react";
import { TextField, Grid, Paper } from "@material-ui/core/";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Home(props) {
  console.log(props);
  return (
   
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
    
  );
}

export default Home;
