import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { id } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(id));

  if (!mailbox) return <p>Not a valid mailbox ID.</p>;

  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
