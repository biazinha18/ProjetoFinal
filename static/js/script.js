$.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(data, status){
    let placeholder = document.querySelector('#load_ajax');
    let values = JSON.parse(data)['bpi'];
    let out = "";
    for (const [key, value] of Object.entries(values)){
        out += `
            <label>${key}</label>
            <input value="${value['rate']}" disabled>
        `;
    }
    placeholder.innerHTML += out;
})