import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes, letters }) => {
  console.log("LETTERS:", letters);
  const { id } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(id));

  const mail = letters.filter((letter) => letter.mailboxId === id);
  console.log(`MAIL FOR ${mailbox._id}:`, mail);

  if (!mailbox) return <p>Not a valid mailbox ID.</p>;

  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>

      <h2>Letters</h2>
      {mail.map((letter) => (
        <p key={letter._id}>Dear {letter.recipient}, {letter.message}</p>
      ))}
    </>
  );
};

export default MailboxDetails;
