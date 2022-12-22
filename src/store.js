import { makeObservable, observable, runInAction, action } from "mobx";
import axios from "axios";

const API_KEY = "49009dbc";

class Store {
  data = "";

  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  getData = async (props) => {
    await axios
      .get(`https://www.omdbapi.com/?t=${props}&apikey=${API_KEY}`)
      .then((res) =>
        runInAction(() => {
          this.data = res.data;
        })
      )
      .catch((err) => console.log(err));
  };
}

const store = new Store();

export default store;
