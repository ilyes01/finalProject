import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageCard from "../../Components/MessageCard/MessageCard";
import { getMessages } from "../../JS/Actions/messages";
import "./Messages.css";

const Messages = () => {
  const dispatch = useDispatch();
  const listMessages = useSelector(
    (state) => state.messageReducer.listMessages
  );

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h1 className="Produit">MESSAGES</h1>
      <div className="listMessages">
        {listMessages.map((el) => (
          <MessageCard newMessages={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
