import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core/";

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <button
            onClick={() => {
              dispatch(
                addTodo({
                  id: uuid(),
                  name: name,
                })
              );
              setName("");
            }}
            className="btn btn-primary mx-2"
          >
            Add Todo
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoInput;
