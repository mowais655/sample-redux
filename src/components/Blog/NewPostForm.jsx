import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions/actions";
import { v4 as uuidv4 } from "uuid";

const NewPostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost({ text: text, id: uuidv4() }));
    setText("");
  };

  return (
    <div>
      <h2>Create new post:</h2>
      <form onSubmit={handleOnSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <br/>
        <input type="submit" value="Create Post" />
      </form>
    </div>
  );
}

export default NewPostForm;
