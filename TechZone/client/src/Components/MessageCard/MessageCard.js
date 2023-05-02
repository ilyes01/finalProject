import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMessages } from "../../JS/Actions/messages";
import "./MessageCard.css";

const MessageCard = ({ newMessages }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteMessages(newMessages._id));
    window.location.reload();
  };
  return (
    <div className="messageCards">
      <Card>
        <Card.Body>
          <Card.Text>
            <span className="forms">full name :</span>
            {newMessages.name}
          </Card.Text>
          <Card.Text>
            <span className="forms">email :</span>
            {newMessages.email}
          </Card.Text>
          <Card.Text>
            <span className="forms">phone :</span>
            {newMessages.phone}
          </Card.Text>
          <Card.Text>
            <span className="forms">Message :</span>
            {newMessages.message}
          </Card.Text>

          <Button variant="danger" onClick={handleDelete}>
            delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MessageCard;
