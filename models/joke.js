class Joke {
    constructor(author, text, name) {
        this.date = new Date();
        this.author = author;
        this.text = text;
        this.name = name;
        this.date = afficheDate()
    }
}

function afficheDate() {
    return this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
}

function diplayjokes() {
    for (var i = 0; i < jokes.length; i++) {
        for (var joke in jokes) {
            console.log(jokes[i].getAuthor());
            //  + 'a dit la blague : ' + jokes.text[joke].author + ' le ' + jokes.date[joke].author + ' .'
        }
    }
}