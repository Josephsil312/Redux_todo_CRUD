import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core/";
import Button from '@material-ui/core/Button';

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
      <Paper elevation={10}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            placeholder = 'Enter what you wanna do'
            label="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(
                addTodo({
                  id: uuid(),
                  name: name,
                })
              );
              setName("");
            }}
          
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoInput;
