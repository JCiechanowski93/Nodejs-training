const axios = require('axios');

function getBook(...isbns) {
    isbns.forEach(function(isbn) {
        (async () => {
        try {
          const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
           if (!data.items)
               throw new Error('Book not found.');
           else {
           console.log("Title:", data.items[0].volumeInfo.title);
           console.log("Author:", data.items[0].volumeInfo.authors);
           }
       } catch(e) {
           console.log(e);
       }
    })();
   })
}

getBook(9738651956, 123, 431); //process.argv.slice(2)

/*const axios = require('axios').default;
const isbns = process.argv.slice(2);

async function checkBook(isbn) {
  try {
    const {items} = (await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)).data;
    if (!items) {
      throw new Error('Book not found.');
    }

    const {title, authors} = items[0].volumeInfo;
    const [author] = authors;

    console.log('ISBN:', isbn, title, 'by', author);
  } catch(e) {
    console.log('ISBN:', isbn, 'errored', e.message);
  }
}

isbns.map(isbn => checkBook(isbn));
*/