import React from "react";
import "./Profile.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import userico from "./user.png";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import edit from "./edit.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PROFIL</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Profile">PROFIL</h1>
      {isAuth ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Img src={userico} />
            <Card.Body>
              <Card.Title>-Profil-</Card.Title>

              <Card.Text>
                <span className="forms">first name :</span> {user && user.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">last name :</span> {user && user.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">E-mail :</span> {user && user.email}
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">EDIT</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/edit/${user._id}`)}
                  >
                    <img src={edit} className="editico" alt="edit" />
                  </a>
                )}
              </OverlayTrigger>

              <hr />
              <Card.Text>
                <span className="forms">password </span>
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">EDIT</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/editPassword/${user._id}`)}
                  >
                    <img src={edit} className="editico" alt="edit" />
                  </a>
                )}
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </div>
      ) : isAuthAdmin ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Img src={userico} />
            <Card.Body>
              <Card.Title>-Profil-</Card.Title>

              <Card.Text>
                <span className="forms">first name :</span>{" "}
                {admin && admin.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">last name :</span> {admin && admin.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">E-mail :</span> {admin && admin.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
