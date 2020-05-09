import {checkForUrl} from "./urlChecker";
const port = 'http://localhost:3000/test'
export function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value


    if (checkForUrl(formText)){
        const postData = async (url = '', data = {}) => {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });

        let newData = await response.json();
        try {
            console.log(newData)
            document.getElementById('results').innerHTML = `<div><h2><em>The Analysis of your article: <em><h2> <br> <br>
            <h3>your article's summary<h3> <br> ${newData.sentences}<br>

            <h3>your article's author<h3> <br> ${newData.author} <br>
            
            <h3>your article's Title<h3> <br> ${newData.title} <br>`
            return newData
        } 
        catch(error) {
            console.log('error',error);
        }
    }
    postData(port, {url: formText});
    document.getElementById('name').value = "";        
    }
    document.getElementById('name').value = "";

}