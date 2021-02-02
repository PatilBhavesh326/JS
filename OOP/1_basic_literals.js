const book1 = {
    title : 'Book One',
    author : 'Jhon Doe',
    year : '2013',
    getSumary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSumary());
console.log(book1.author);
console.log(typeof book1.year);
console.log(Object.values(book1));
console.log(Object.keys(book1));