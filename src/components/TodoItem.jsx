import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
import { IconButton, Grid, TextField, Paper } from "@material-ui/core/";
import { Delete, Edit, Save } from "@material-ui/icons/";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 5,
    padding: 16,
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
  },

});

function TodoItem({ todo, index }) {
 
  const classes = useStyles();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <Container maxWidth="sm" className={classes.root}>
    
    <Grid container direction="row">
      
      <Grid item xs={6}>
        {editable ? (
          <TextField
            label="Todo List "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h4>{todo.name}</h4>
        )}
      </Grid>

      <Grid item xs={2}>
        <IconButton
          aria-label="delete"
          onClick={() => {
            editable &&
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
            setEditable(!editable);
          }}
        >
          {editable ? <Save /> : <Edit />}
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
   </Container>
  );
}

export default TodoItem;
