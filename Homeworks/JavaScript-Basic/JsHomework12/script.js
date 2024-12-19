let book = {
  bookOneTitle: "Twenty Thousand Leagues Under the Sea",
  bookOneAuthor: "Jules Verne",
  bookOneReadingStatus: "",
  bookTwoTitle: "Around the World in Eighty Days",
  bookTwoAuther: "Jules Verne",
  bookTwoReadingStatus: "",
  bookRead: function read() {
    if ((this.bookOneReadingStatus === "yes")) {
      return `Then you have to read ${this.bookTwoTitle}`;
    } else if((this.bookOneReadingStatus === "no")) {
      return `${this.bookOneTitle} is a great book read it all the way!`;
    }
  },
};
book.bookOneReadingStatus = prompt(`Have you read ${book.bookOneTitle}`);
alert(book.bookRead());
