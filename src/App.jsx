import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h1>Whoops, nothing here!</h1>} />
      </Routes>
    </>
  );
};

export default App;
