const booklist = require("./books500.json")
const filtering = (
    arr = [],
    config = {
        BookTitle: null, YearOfPublication: null, rating: null,
        language_code: null, BookAuthor: null, ratings_count: null, text_reviews_count: null
,ISBN:null    }
) => {
    // console.log(arr.slice(0, 5))
    const { BookTitle, YearOfPublication, rating, BookAuthor, language_code, text_reviews_count, ratings_count,ISBN } = config
    if (BookTitle || BookAuthor || YearOfPublication || rating || language_code || ratings_count || text_reviews_count||ISBN) {


        const filiter_arr = arr.filter((o) => {
            var cond = true;
            if (BookTitle) {
                cond = cond && o.BookTitle.includes(BookTitle)
            }
            if (BookAuthor) {
                cond = cond && o.BookAuthor.includes(BookAuthor)
            }
            if (language_code) {
                cond = cond && o.language_code.includes(language_code)
            }
            if (YearOfPublication) {
                cond = cond && Number(o.YearOfPublication) >= Number(YearOfPublication)
            }
            if (ratings_count) {
                cond = cond && Number(o.ratings_count) >= Number(ratings_count)
            }
            if (rating) {
                cond = cond && Number(o.average_rating) >= Number(rating)
            }
            if (ISBN) {
                cond = cond && o.ISBN.includes(ISBN)
            }
            if (ratings_count) {
                cond = cond && Number(o.ratings_count) >= Number(ratings_count)
            }
            if (text_reviews_count) {
                cond = cond && Number(o.text_reviews_count) >= Number(text_reviews_count)
            }
            return cond
        })
        return filiter_arr
        // console.log(filiter_arr)
    } else {
        return []
    }

};
// filtering(books,{
//     // BookTitle:"Harry",
//     YearOfPublication:500,
//     rating:4
// })
const sorting = (
    arr = [],
    config = { key: null, type: null }
) => {
    const { key, type } = config;

    if (key) {
        arr.sort((x, y) => {
            var num1 = Number(x[key]);
            var num2 = Number(y[key])
            if (isNaN(x[key])) {
                num1 = x[key];
                num2 = y[key];
            }
            if (num1 > num2) {
                if (type && type === "desc") {
                    return -1;
                } else {
                    return 1;
                }
            }
            if (num1 < num2) {
                if (type && type === "desc") {
                    return 1;
                } else {
                    return -1;
                }
            }
            return 0
        })
        // console.log(arr.slice(0, 10))
        return arr;
    }
}
let f_booklist = filtering(booklist, {
    BookTitle: 'Classic',

})

f_booklist = sorting(f_booklist, {
    key: "YearOfPublication",
    // type: "desc"
    type: "aesc"
})

console.log(f_booklist)
