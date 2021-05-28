import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core/";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 5,
    padding: 16,
    border: '1px solid'

  },

});

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  const classes = useStyles();
  return (
     <Container maxWidth="sm" className={classes.root}>
      
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
   
  </Container>
  );
}

export default TodoInput;
