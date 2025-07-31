import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  _id: 0,
  boxSize: "Small",
  boxOwner: "",
};

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New MailBox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Owner Name:</label>
        <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />
        <label htmlFor="boxSize">Box Size:</label>
        <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
