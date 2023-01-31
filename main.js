const {crawlPage} = require('./crawl.js')

function main() {
    if (process.argv.length < 3) {
        console.log("no website provided")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("too many command line args")
        process.exit(1)
    }
    const baseURL = process.argv[2]

    console.log(`starting crawl of ${baseURL}`)
    crawlPage(baseURL)

}



/* we use 3 because:
1. the first argument is the interpreter (node is technically the name of our program)
2. the second argument is the name of our code (the entrypoint file)
3. the third argument is the one we're passing into our program

Check for > 3 also so people don't pass in two + websites simultaneously 
*/

main()