const express = require('express');
const app = express();

const mysql = require('mysql2');
const cors = require('cors');


// *****************
// Add MYSQL DATABASE CONNECTION
// *****************
// below values should be same as 
// environment variables for 'backend'
// defined in file 'docker-compose.yml'
// ****************
const db = mysql.createPool(
  {
    host: 'db', 
    user: 'MYSQL_USER', 
    password: 'MYSQL_PASSWORD', 
    database: 'books'
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
// http method: GET
// API url: /
// ****************
app.get('/', (req, res) => {
  res.send('Hi There')
});


// *****************
// GET all of the books 
// in the database
// *****************
// http method: GET
// API url: /get
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
// http method: POST
// API url: /insert
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
// http method: DELETE 
// API url: /delete
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
// http method: PUT
// API url: /update
// *********************
app.put("/update/:bookId", (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = "UPDATE tbl_books_reviews SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err)
  })
})


//app.listen('3001', () => { })

const PORT = 3001;

app.listen(PORT, () => {

  console.log(`server is running at port: ${PORT}`);

  });