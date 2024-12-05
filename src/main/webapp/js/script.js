document.getElementById('myButton').addEventListener('click', function() {
    fetch('/myservlet')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
