// need a function that checks if the entered text is valid as url.
//https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    let pattern_bool = !!pattern.test(inputText)

    if(pattern_bool) {
        console.log(inputText,"is a valid ")
        return true
    }
    else{
        alert("please enter a valid website. Don't forget http(s)://")
        return false
    }
}
export {checkForUrl}