const bookProtos = {
    getSumary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge : function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//Create Object

// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Jhon Doe';
// book1.year = '2020';

const book1 = Object.create(bookProtos, {
    title : {value : 'Book one'},
    author : {value :'Jhon Doe'},
    year : {value :'2020'}
});

console.log(book1.getSumary())