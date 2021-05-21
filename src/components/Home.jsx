import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Paper } from "@material-ui/core/";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Home(props) {
  console.log(props);
  return (
    <Paper style={{ height: "100vh" }}>
      <Grid container>
        <Grid container item xs={6} style={{ backgroundColor: "#f3f3f3" }}>
          <Grid item xs={12}>
            <TodoInput />
          </Grid>
          <Grid item xs={12}>
            <TodoList />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Home;
