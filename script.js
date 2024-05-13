document.getElementById('btn').addEventListener('click', function(e) {
    e.preventDefault();

    const allInputs = document.querySelectorAll('input');
    let sum = 0;
    
    allInputs.forEach(input => {
        sum += parseFloat(input.value);
    });

    setTimeout(() => {
        document.getElementById('result').textContent = `The total price is:  ${sum}tk`;
    }, 3000);
});