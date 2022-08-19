# 💡 Week 5 - Redux assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select Open Preview)

### Rules for this challenge

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this challenge public in any ways

---

### Second opinion

- As per Codaisseur/NRTO rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

---

### Duration

- This challenge ends at 16.00h.

---

### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed four features. `Fail grade`.

- 📒 Yellow: you've completed four features. `Pass grade`.

- 📗 Green: you've completed more than four features. `Pass with honor grade`.

🚨 **If you've completed all required features, but they are not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting this assessments takes time. Please be patient with regards to getting the results of your assessments. Results will go out the following week between Monday and Tuesday.

#### How to make and submit your work

- Use `npx create-react-app` to create a new react app
- Add this briefing to your repo as `BRIEFING.md`
- `create-react-app` will initialize a git repository for you, so don't make one yourself
- Go to `github.com` and
  - create a new `private` repository
  - make sure **NOT** to initalize with a readme/.gitignore as it will give you errors when you will try to push
  - Add the evaluator to your repository as a `collaborator` (karlaevelize, swendude, David-L-R and matiasgarcia91)
- Add your newly created git repository as a remote to your react app
- Push the initial version of your app created by `create-react-app`
- Start your react app with `npm run start`, as usual, and start programming.

### Self assessment

- After you finish the challenge, go and fill up this form:

👉 [Redux Challenge Form](https://forms.gle/tu8j6iRM2EV8GZHdA)

### What to expect after submitting this challenge?

- If you scored a red, a teacher will contact you for a conversation
- In case you scored yellow or green, you don't have to expect a conversation, but feel free to reach out to a teacher if you have questions

## Learning goals

For transparency and clarity, these are the learning goals we will be testing:

- Installing and setting up Redux in a React app
- Creating & managing state using redux stores
- Writing update logic in reducers
- Writing actions and actions creators, including thunks for asynchronous actions
- Creating & using selectors to get information from the store
- Using npm to install packages and run scripts
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things.

Don't hesitate to use the Reader & Google (Stackoverflow).

## Tips

- **Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.
- **Don't get stuck for too long!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.
- **Focus on the required features first!** Before moving to the bonus sections of this assessment, focus on implementing the mandatory parts, then move on to the next ones.

## What are we building?

The goal of this challenge is to create a dashboard for a bank account. In this account, you can keep track of your debit cards, adjust their limits and block and unblock when needed. You are also able to deposit and withdraw money.

You can use the attached wireframe as an inspiration
**don't worry about the looks of your app, we will not take it into account when grading you!**

### 🍿 Set Up - Display Data

1. Create a reducer and add a initial state:

```js
const initialState = {
  checkingAccount: 1000,
  savings: 8000,
  cards: [
    { id: 1, blocked: false, limit: 200, max: 5000 },
    { id: 2, blocked: true, limit: 300, max: 2000 },
    { id: 3, blocked: true, limit: 700, max: 4000 },
    { id: 4, blocked: false, limmit: 100, max: 500 },
  ],
  privateMode: false
};
```

> Tip: use the above example for your initial state in the reducer, there's no need to create extra slices

2. Write 3 selectors

- Select checking account
- Select savings account
- Select cards

3. Import the selectors in your chosen components and display the data on the screen

## Features - 🖥️ Building an interface

Choose 4 of the following features to complete:

### ❗ Feature 1 - Adding and Withdrawing money

Our accounts are not static, we always interact with them by either receiving money, making transfers, paying bills, etc. To keep our app simple, we can summarize these transactions in two categories: adding and subtracting money. For this feature, add the following functionalities:

- Add money to the checking account
- Subtract money from the checking account
- If a transaction will leave the account lower than 0, this should not be allowed

### ❗ Feature 2 - Block & Unblocking cards

When we are not using the cards, it's very convenient to block them, this way you feel safer by knowing nobody will be able to use them, specially when talking about credit cards and cards you don't use a lot. Based on that, add the following functionality:

- Block and unblock a card

> Tip: Have a look at the `update score of a player` exercise. You'll find it on React day 3
> Tip: You don't need to write all the logic in a toggle icon, you can use two buttons: block & unblock

### ❗ Feature 3 - Change available limit of the card

Our cards can have more limit than we need on a daily basis, it's normal to set our debit cards to lower amounts and increase it when we need to buy something more expensive, like paying vacations or buying a car. Having that in mind, add the following functionalities:

- Change the available limit of the card
- The available limit of the card can not exceed it's max limit

> Tip: You don't need to use a slider, feel free to just get the number from a standard form/input.

### ❗ Feature 4 - Private mode

When checking our bank accounts in public or showing something to someone, we don't always want people to see how much money we have, so it's nice to have to option to hide it. Add the following:

- If private mode is on, all the money values should be hidden (savings, available for transactions and total)

### ❗ Feature 5 - Savings Account

A lot of times, we don't want all our money in our checking account, just maybe enough for the month and the rest goes into savings. Savings accounts also have benefit of giving you some interest back. Let's add that possibility to our app.

- Add the functionality to transfer money from savings account to checking account and vice-versa
- You can not transfer more money than it's available in any of the accounts. None of them can go under 0. 

### ❗ Feature 6 - Add Credit Cards and Validate

Today we rely a lot on credit cards. When paying with credit cards or adding them to our wallets, these cards need to be validated (we basically have to check if that card exists), there are algorithms to do this.

Let's add a small validation to our application when adding a new card. Consider this for our validation:

> American Express numbers start with 34 or 37 and consists of 15 numbers

> MasterCard numbers start with 51, 52, 53, 54, or 55 and consistis of 16 numbers

> Visa numbers start with 4 and consists of 13 or 16 numbers

Your task:

- Implement a feature to add a new credit card, you will need:
  - Name
  - Number
  - Issuer (not a user input)
- After receiving the data from the user, start with the validation.
- If the card doesn't pass the criteria, it shouldn't be added to the cards array
- If it passes the criteria, your app should respond with the issuer (Amex, MasterCard or Visa) and add it to the redux state
