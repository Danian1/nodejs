//express
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/',function(req, res){
  res.render('index', { title: 'Home' });
});
app.get('/store',function(req, res){
  res.render('store',{ title: 'Store' });
});
app.get('/contact',function(req, res){
  res.render('contact',{ title: 'Contact' });
});
app.get('/about',function(req, res){
  res.render('about',{ title: 'About' });
});
app.get('/view',function(req, res, next){
  res.render('view', {  title: 'View' });
  next();
});
app.get('*',function(req ,res){
  res.render('404');
});
app.listen('3000',()=>{
  console.log('Server started on port 3000');
});
