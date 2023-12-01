import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersTable from "./components/UsersTable";
import Root from "./routes/root";
import UserCard from "./components/UserCard";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Root}>
          <Route path="/" element={<UsersTable />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/user/:id" Component={UserCard} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
