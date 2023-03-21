const cheerio = require("cheerio")
const axios = require("axios")

const url = "https://virtualbiznest.com/"
// const AT = "EACDMUs5lDZB0BAO8xEwnhsWdaXYj7mTDPlWVabZBckbUuZAdNsvyujjb5VCjMkuO0RKUyFnZBmIi9LlbSZBShm1dElf5Lcl3GEgkeRDeZBfMWItP6oyG22brEEAZCVWj5YPvYWZCpAHZAolOP5tYB7LLZCKBZAV4gbzsQaNSDxE8ru2GurNLSZBMqbeuNZAbGhBeSZAnmqBaXxpBcb6t1qfSHSk2kV5Wdr0LWLe0qvpca37fwWZATAvkCg2HuWQSeV1DELMbcEZD"
// const url = "https://graph.facebook.com/245258397833223?fields=id,name,email&access_token="+AT

const getEmails = async () => {
    console.log("Scanning all emails in the website....")
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        // console.log(response.data)

        const search_in = $.html($('body'))
        const string_context = search_in.toString()

        const emails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
        if (emails == null || emails.length == 0) console.log("No emails found!")
        else console.log([...new Set(emails)])

    } catch(e) {
        console.log(e)
    }
}

getEmails()

// const url = require('url')
// const adr = 'https://samplesite.com/?s=node+js+training'
// var q = url.parse(adr, true)
// console.log(q.search)

// const crypto = require('crypto')
// const c1 = new crypto.Certificate()
// const c2 = crypto.Certificate
// console.log(c1, "===", c2)

// const e = require('express')
// const app = e()
//const fs = require('fs')
// const path = require('path')
// app.use(e.static(path(__dirname), 'public'))

// fs.readFile('demo.txt', function(err,res) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(JSON.stringify(res))
// })
// console.log('Done')




// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'test'
// });
 
// connection.connect();

// var query = `
//     SELECT p.name as name, m.name as manufacturer, c.color
//     FROM product AS p
//     JOIN manufacturer AS m
//     ON p.manufacturerID = m.id
//     JOIN color as c
//     ON c.id = p.color
//     WHERE code = 'Deffect'
// `
// connection.query(query, function(err,res) {
//     if (err) throw err
//     console.log(res)
// })