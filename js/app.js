//Book Constructor 
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
 
}
//Ui constructor
function UI(){}
UI.prototype.addBookToList= function(book){
   const list=document.getElementById('book-list');
   //create a tr element
   const row= document.createElement('tr');
   //Insert cols in this row
   row.innerHTML=
   `<td> ${book.title}</td>
   <td> ${book.author}</td>
   <td> ${book.isbn}</td>
   <td><a href='#' class="delete">X</a></td>
   `;
list.appendChild(row);

}
//Show Alert 
UI.prototype.showAlert=function(message, className){
    const div= document.createElement('div');
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.container');
    const form= document.querySelector('#book-form');
    container.insertBefore(div,form);
    //Timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);


}
// Delete Book 
UI.prototype.deleteBook= function(target){
    if(target.className==="delete"){
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields= function(){

}
//Event Listners
document.getElementById("book-form").addEventListener("submit",
 function(e){
    e.preventDefault();
     
     //get form values
    const title= document.getElementsById('title').value;
    const author= document.getElementById("author").value;
    const isbn= document.getElementById("isbn").value;
    // Instatntiate a book;
     const  book = new Book(title, author, isbn);
//Instantiate UI
const ui = new UI();
// VALIDATE 
if(title ==="" || author ===""|| isbn ===""){
    ui.showAlert("Please fill all the fields ", 'error');
   
}else{

//aDD book to list
ui.addBookToList(book);
ui.showAlert("Book Added", "success")
ui.clearFields();

}
    
 }
)
//Event listner for delete 
document.getElementById('book-list').addEventListener("click", function(e){
    const ui= new UI;
    ui.deleteBook(e.target);

  
  
  if(e.target.className=="delete"){
      e.target.parentElement.parentElement.remove();

      ui.showAlert('Book removed', 'success');
    
  }

 
    
  
  
})