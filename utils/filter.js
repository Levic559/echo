const booklist = require("./books500.json")
export const filtering = (
    arr = [],
    config = { BookTitle: null, YearOfPublication: null, rating: null,
        language_code:null, BookAuthor:null, ratings_count:null,text_reviews_count:null }
) => {
    // console.log(arr.slice(0, 5))
    const { BookTitle, YearOfPublication, rating, BookAuthor ,language_code,text_reviews_count,ratings_count} = config
    if (BookTitle || YearOfPublication || rating || language_code ||ratings_count || BookAuthor||text_reviews_count) {


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
                cond = cond && Number(o.num_YearOfPublications) >= Number(YearOfPublication)
            }
            if (ratings_count) {
                cond = cond && Number(o.ratings_count) >= Number(ratings_count)
            }
            if (rating) {
                cond = cond && Number(o.average_rating) >= Number(rating)
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
        return arr ;
    }
}
// let f_booklist= filtering(booklist,{
//     BookTitle:'Harry',
//     YearOfPublication:500
// })

// f_booklist=sorting(f_booklist, {
//     key: "BookTitle",
//     type: "desc"
// })

// console.log(f_booklist)
