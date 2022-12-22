import React, { useState } from "react";
import styled from "styled-components";
import ListTable from "./Table";
import { observer } from "mobx-react";
import store from "./store";

const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 10px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > input {
    border-radius: 5px;
    height: 100%;
    border: 1px solid black;
  }

  & > button {
    height: 100%;
    border-radius: 5px;
    border: 1px solid black;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: black;
      color: white;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    store.getData(value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Keyword"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button>Submit</button>
      </Form>
      {store.data.Title ? <ListTable /> : <div>No Data</div>}
    </Container>
  );
};

export default observer(App);
