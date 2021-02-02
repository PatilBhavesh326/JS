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

//Magazine Constructor

function Magazine(title, author, year,month){
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate magnize object

const mag1 = new Magazine('Mag one', 'Jhon Doe', '1994', 'Jan');

//Use Magazine s constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);