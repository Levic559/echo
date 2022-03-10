const booklist = require("./books500.json")
export const filtering = (
    arr = [],
    config = {
        title: null, pub_year: null, rating: null,
        language_code: null, authors: null, ratings_count: null, text_reviews_count: null
,isbn:null    }
) => {
    // console.log(arr.slice(0, 5))
    const { title, pub_year, rating, authors, language_code, text_reviews_count, ratings_count,isbn } = config
    if (title || authors || pub_year || rating || language_code || ratings_count || text_reviews_count||isbn) {


        const filiter_arr = arr.filter((o) => {
            var cond = true;
            if (title) {
                cond = cond && o.title.includes(title)
            }
            if (authors) {
                cond = cond && o.authors.includes(authors)
            }
            if (language_code) {
                cond = cond && o.language_code.includes(language_code)
            }
            if (pub_year) {
                cond = cond && Number(o.pub_year) >= Number(pub_year)
            }
            if (ratings_count) {
                cond = cond && Number(o.ratings_count) >= Number(ratings_count)
            }
            if (rating) {
                cond = cond && Number(o.average_rating) >= Number(rating)
            }
            if (isbn) {
                cond = cond && o.isbn.includes(isbn)
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
//     // title:"Harry",
//     pub_year:500,
//     rating:4
// })
export const sorting = (
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
    key: "isbn",
    type: "desc"
})

console.log(f_booklist)
