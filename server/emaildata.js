let emails = [
  {
    id: 1,
    createdOn: Date(),
    subject: "Welcome Epic Mail",
    myMessage: "This is First Email",
    parentMessageId: 1,
    status: "read" // draft, sent or read
  },
  {
    id: 2,
    createdOn: Date(),
    subject: "Welcome Epic Mail",
    myMessage: "This is First Email",
    parentMessageId: 1,
    status: "sent" // draft, sent or read
  }
];
module.exports = emails;
