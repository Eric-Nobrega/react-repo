import React from "react";
import "./Account.css";

class Account extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content" style={{ backgroundColor: "#343a40" }}>
          <div className="header" style={{ color: "white" }}>
            {this.props.accountName}
          </div>
          <div className="description" style={{ color: "white" }}>
            <p>Balance: {this.props.accountBalance}</p>
          </div>
        </div>
        <div className="extra content">
          <span className="left floated like">
            <i
              className="edit icon"
              onClick={() => {
                this.props.accountOpenEditModal();
              }}
            ></i>
            Edit
          </span>
          <span className="right floated star">
            <i
              className="remove icon"
              onClick={() => {
                this.props.accountRemove();
              }}
            ></i>
            Remove
          </span>
        </div>
      </div>
    );
  }
}

export default Account;
