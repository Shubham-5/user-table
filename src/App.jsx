import React, { useState, useMemo, useEffect, useReducer } from "react";
import sortObjectsArray from "sort-objects-array";
import SearchInput from "./components/SearchInput";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import UserDetails from "./components/UserDetails";

function App() {
  const [sortDirection, setSort] = useState("asc");
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const fetchUserDetails = async (todo) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${todo.id}`)
      .then((res) => res.json())
      .then((data) => setUser({ ...data, todo }))
      .catch((err) => console.log(err));
  };

  const handleSort = () => {
    sortDirection === "asc" ? setSort("desc") : setSort("asc");
    let filterData = sortObjectsArray(data, "id", sortDirection);
    setData([...filterData]);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
    if (text.length) {
      const filterTextData = data.filter(({ title, id, completed }) => {
        if (title.includes(text)) {
          return title;
        } else if (text.includes("complete")) {
          return completed;
        } else if (text.includes("incomplete")) {
          return !completed;
        } else if (id == text) {
          return id;
        }
      });
      setfilterData(filterTextData);
    } else {
      setfilterData([]);
    }
  };

  console.log(filterData);

  return (
    <main className='container'>
      <div className='row py-4'>
        <section className='col-6'>
          <SearchInput
            handleSearchText={handleSearchText}
            searchText={searchText}
          />
          <table class='table table-bordered my-4 table'>
            <TableHead handleSort={handleSort} />
            <TableBody
              filterData={filterData}
              data={data}
              fetchUserDetails={fetchUserDetails}
            />
          </table>
        </section>
        <section className='col-6'>
          <UserDetails user={user} />
        </section>
      </div>
    </main>
  );
}

export default App;
