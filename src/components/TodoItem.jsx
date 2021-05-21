import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
import { IconButton, Grid, TextField } from "@material-ui/core/";
import { Delete, Edit, Save } from "@material-ui/icons/";
function TodoItem({ todo, index }) {
  console.log(todo);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        {index}
      </Grid>
      <Grid item xs={6}>
        {editable ? (
          <TextField
            label="Todo Name "
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
  );
}

export default TodoItem;
