//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//getsummary prototype
Book.prototype.getSumary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//revise / change the year

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

// Instantiate an object
const book1 = new Book('Book One', 'Jhon doe', '2013');
const book2 = new Book('Book two', 'jane Doe', '2016');

console.log(book2.getAge());
book2.revise(2020);
console.log(book2); 