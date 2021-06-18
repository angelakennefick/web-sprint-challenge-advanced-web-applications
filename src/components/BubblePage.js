import React, { useEffect, useState, componentDidMount } from "react";
import Axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  componentDidMount(Props) {
    if (this.props.id !== Props.id) {
      let data = await axios
      .get("http://localhost:5000/api/colors" + this.props.id)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
      this.setColors({ colors: data.data });
    }
  }

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
  };

  const deleteColor = (colorToDelete) => {
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
