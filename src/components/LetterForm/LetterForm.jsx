import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  mailboxId: "1",
  recipient: "",
  message: "",
};

const LetterForm = ({ addLetter, mailboxes }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select id="mailboxId" name="mailboxId" value={formData.mailboxId} onChange={handleChange}>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          placeholder="Recipient name"
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write a message here"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LetterForm;
