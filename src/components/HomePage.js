import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  selectCardsAccount,
  selectSavingAccount,
  selectCheckingAccount,
  selectPrivateMode,
} from "../store/account/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  blockedToggle,
  withdraw,
  deposit,
  toChecking,
  toSaving,
  cardLimits,
} from "../store/account/slice";
import RangeSlider from "react-bootstrap-range-slider";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const HomePage = () => {
  //States and const values
  const dispatch = useDispatch();
  const cards = useSelector(selectCardsAccount);
  const savings = useSelector(selectSavingAccount);
  const checking = useSelector(selectCheckingAccount);
  const privateMode = useSelector(selectPrivateMode);
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const state = {
    button: 1,
  };
  const [limit, setLimit] = useState(0);

  const handleOnClick = (id) => {
    dispatch(blockedToggle(id));
  };

  //Transaction Section
  const sumbitTransaction = (e) => {
    e.preventDefault();
    console.log("Amount", amount);
    if (state.button === 1) {
      console.log("Button 1 withdraw!");
      dispatch(withdraw(parseInt(amount)));
    }
    if (state.button === 2) {
      console.log("Button 2 deposit!");
      dispatch(deposit(parseInt(amount)));
    }
  };

  ///Transfer Section
  const sumbitTransfer = (e) => {
    e.preventDefault();
    console.log("Amount", amount);
    if (state.button === 1) {
      console.log("Button 1 withdraw!");
      dispatch(toChecking(parseInt(amount2)));
    }
    if (state.button === 2) {
      console.log("Button 2 deposit!");
      dispatch(toSaving(parseInt(amount2)));
    }
  };

  // Card Limit
  //   const changeLimit = (id) => {
  //     console.log(limit);
  //     dispatch(cardLimits(id));
  //   };
  //   if (cards.id === limit) {
  //     dispatch(cardLimits(cards.id));
  //   }

  //   changeLimit();
  //Private Mode
  const privateOnChange = () => {
    let x = document.getElementById("checkbox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 backColor1">
          Private Mode:
          <input
            type="checkbox"
            // checked={item.completed ? true : false}
            onChange={() => privateOnChange()}
            checked={privateMode}
          />
          <h3 className="mt-2">
            Checking Account : <span id="checking">{checking}</span>
          </h3>
          <h3>
            Savings : <span id="saving">{savings}</span>
          </h3>
          <div className="backColor3">
            <Card className="my-4 backColor3">
              <Card.Body className="backColor3">
                <Card.Title>Transactions </Card.Title>
                <Card.Subtitle className="mb-2">
                  <form onSubmit={sumbitTransaction}>
                    {" "}
                    <span>Amount : </span>{" "}
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-light mr3"
                      onClick={() => (state.button = 1)}
                    >
                      Withdraw
                    </button>
                    <button
                      type="submit"
                      className="btn btn-light"
                      onClick={() => (state.button = 2)}
                    >
                      Deposit
                    </button>
                  </form>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="my-4 backColor3">
              <Card.Body className="backColor3">
                <Card.Title>Transfer </Card.Title>
                <Card.Subtitle className="mb-2">
                  <form onSubmit={sumbitTransfer}>
                    {" "}
                    <span>Amount : </span>{" "}
                    <input
                      type="text"
                      value={amount2}
                      onChange={(e) => setAmount2(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-light mr3"
                      onClick={() => (state.button = 1)}
                    >
                      To Checking
                    </button>
                    <button
                      type="submit"
                      className="btn btn-light"
                      onClick={() => (state.button = 2)}
                    >
                      To Savings
                    </button>
                  </form>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-md-6 backColor2">
          {cards.map((card) => (
            <Card className="cardStyle my-2" key={card.id}>
              <Card.Body className="backColor2">
                <Card.Title>Card {card.id}</Card.Title>
                <Card.Subtitle className="mb-2">
                  {/* <label className="form-label">Card Limit</label>
                  <input
                    type="range"
                    step={10}
                    min={0}
                    max={card.max}
                    value={card.limit}
                    className="form-range"
                    id="customRange1"
                    onChange={(e) => setCardLimit(e.target.value)}
                  />
                  <RangeSlider
                    value={cardLimit}
                    onChange={(e) => setCardLimit(e.target.value)}
                  /> */}
                </Card.Subtitle>
                <Card.Text>
                  <RangeSlider
                    value={card.limit}
                    min={0}
                    max={card.max}
                    step={10}
                    id={card.id}
                    onChange={(e) => setLimit(e.target.value)}
                    // onSubmit={() => changeLimit(card.id)}
                  />
                  {/* <span>{card.limit}</span> */}

                  <br></br>

                  <label>
                    <span> Block Card: </span>
                    <BootstrapSwitchButton
                      checked={card.blocked}
                      size="sm"
                      onlabel="On"
                      offlabel="Off"
                      onChange={() => {
                        handleOnClick(card.id);
                      }}
                    />
                  </label>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
