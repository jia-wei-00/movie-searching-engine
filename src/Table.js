import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import store from "./store";

const Table = styled.table`
  margin-top: 20px;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;

  div {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

function ListTable() {
  console.log(store.Title, "data");

  return (
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={store.data.Poster} alt="poster" />
          </td>
          <td>
            <Container>
              <div>Title:</div>
              <div>{store.data.Title}</div>
            </Container>
            <Container>
              <div>Rated:</div>
              <div>{store.data.Rated}</div>
            </Container>
            <Container>
              <div>Rating:</div> <div>{store.data.imdbRating}</div>
            </Container>
            <Container>
              <div>Released Date:</div> <div>{store.data.Released}</div>
            </Container>
            <Container>
              <div>Duration:</div>
              <div> {store.data.Runtime}</div>
            </Container>
            <Container>
              <div>Plot:</div> <div>{store.data.Plot}</div>
            </Container>
            <Container>
              <div>Director:</div> <div>{store.data.Director}</div>
            </Container>
            <Container>
              <div>Actors:</div> <div>{store.data.Actors}</div>
            </Container>
            <Container>
              <div>Language:</div> <div>{store.data.Language}</div>
            </Container>
            <Container>
              <div>Awards:</div> <div>{store.data.Awards}</div>
            </Container>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default observer(ListTable);
