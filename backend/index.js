const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();


// *****************
// Add MYSQL DATABASE CONNECTION
// *****************
const db = mysql.createPool({
  host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
  user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
  password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'books' // database name MYSQL_HOST_IP: mysql_db
})


// *********************
// Enable cors security headers
// *********************
app.use(cors())


// ***********************
// add an express method 
// to parse the POST method
// ***********************
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// ****************
// HOME PAGE
// ****************
app.get('/', (req, res) => {
  res.send('Hi There')
});


// *****************
// GET all of the books 
// in the database
// *****************
app.get('/get', (req, res) => {
  const SelectQuery = " SELECT * FROM  tbl_books_reviews";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})


// ****************
// ADD a book 
// to the database
// ****************
app.post("/insert", (req, res) => {
  const bookName = req.body.setBookName;
  const bookReview = req.body.setReview;
  const InsertQuery = "INSERT INTO tbl_books_reviews (book_name, book_review) VALUES (?, ?)";
  db.query(InsertQuery, [bookName, bookReview], (err, result) => {
    console.log(result)
  })
})


// *****************
// DELETE a book 
// from the database
// *****************
app.delete("/delete/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const DeleteQuery = "DELETE FROM tbl_books_reviews WHERE id = ?";
  db.query(DeleteQuery, bookId, (err, result) => {
    if (err) console.log(err);
  })
})


// *********************
// UPDATE a book review
// *********************
app.put("/update/:bookId", (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = "UPDATE tbl_books_reviews SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err)
  })
})


app.listen('3001', () => { })
