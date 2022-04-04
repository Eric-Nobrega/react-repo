import React from "react";
import Networth from "./components/Networth";
import AccountList from "./components/AccountList";
import Account from "./components/Account";
import { Button, Modal } from "react-bootstrap";
import "./components/App.css";

class App extends React.Component {
  //Account List State
  //Contains ID, Name, Balance, Total Balance, ShowModal
  state = {
    accountList: [],
    accountID: null,
    accountName: "",
    accountBalance: null,
    totalBalance: 0,
    showModal: false,
    editAccountModal: false,
  };

  //Add New Account Function
  handleAddAccount() {
    const newAccount = {
      id: Math.floor(Math.random() * 1000),
      name: this.state.accountName,
      balance: this.state.accountBalance,
    };
    const updatedAccountList = [...this.state.accountList, newAccount];

    this.setState({
      accountList: updatedAccountList,
      accountID: null,
      accountName: "",
      accountBalance: null,
      totalBalance: +newAccount.balance + +this.state.totalBalance,
      showModal: !this.state.showModal,
    });
  }

  //Modal Helper Function
  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  //Remove Account Helper Function
  handleRemoveAccount(currentID) {
    const updatedList = this.state.accountList.filter(
      (item) => item.id !== currentID
    );

    this.setState({
      accountList: updatedList,
      accountID: null,
      accountName: "",
      totalBalance: null,
      accountBalance: null,
    });
  }

  //Show Edit Account Modal
  handleOpenEditModal() {
    this.setState({
      editAccountModal: true,
    });
  }

  //Edit Account Helper Function
  handleEditAccount(currentID) {
    console.log(currentID);
    const updatedAccountList = [...this.state.accountList].map((account) => {
      if (account.id == currentID) {
        console.log(account);
      }
      return account;
    });

    this.setState({
      accountList: updatedAccountList,
      accountID: null,
      accountName: "",
      totalBalance: null,
      accountBalance: null,
      editAccountModal: false,
    });
  }

  render() {
    const renderedAccounts = this.state.accountList.map((account) => {
      return (
        <Account
          key={account.id}
          accountName={account.name}
          accountBalance={account.balance}
          accountRemove={() => {
            this.handleRemoveAccount(account.id);
          }}
          accountEdit={() => {
            this.handleEditAccount(account.id);
          }}
          accountOpenEditModal={() => {
            this.handleOpenEditModal(account.id);
          }}
        />
      );
    });

    return (
      <div id="main-container">
        <Networth nwFigure={this.state.totalBalance} />
        <Modal show={this.state.showModal} style={{ marginTop: "50%" }}>
          <Modal.Header>Account Details</Modal.Header>
          <Modal.Body>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "22px" }}>Name:</label>
              <input
                type={"text"}
                onChange={(e) => {
                  this.setState({ accountName: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Balance:</label>
              <input
                type={"text"}
                onChange={(e) =>
                  this.setState({ accountBalance: e.target.value })
                }
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleAddAccount();
              }}
              style={{ backgroundColor: "#343a40" }}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                this.handleModal();
              }}
              style={{ backgroundColor: "#343a40" }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.editAccountModal} style={{ marginTop: "50%" }}>
          <Modal.Header>Edit Account Details</Modal.Header>
          <Modal.Body>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "22px" }}>Name:</label>
              <input
                type={"text"}
                onChange={(e) => {
                  this.setState({ accountName: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Balance:</label>
              <input
                type={"text"}
                onChange={(e) =>
                  this.setState({ accountBalance: e.target.value })
                }
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleEditAccount();
              }}
              style={{ backgroundColor: "#343a40" }}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                this.handleModal();
              }}
              style={{ backgroundColor: "#343a40" }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <div id="app-content_button">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              this.handleModal();
            }}
          >
            Add New Account
          </button>
        </div>
        <div id="app-content">
          <ul>{renderedAccounts}</ul>
        </div>
      </div>
    );
  }
}

export default App;
