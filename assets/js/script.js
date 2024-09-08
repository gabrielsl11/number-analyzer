var values = [];

document.getElementById('add').addEventListener('click', () => {
    let number = Number(document.getElementById('number').value);
    let list = document.getElementById('list');
    let result = document.getElementById('result');

    function isnumber(n) {
        return n >= 1 && n <= 1000;
    }

    function inlist(n, l) {
        return l.indexOf(n) != -1;
    }

    if (isnumber(number) && !inlist(number, values)) {
        values.push(number);
        let option = document.createElement('option');
        option.text = `Value ${number} added.`;
        option.value = number;
        result.innerHTML = '';
        list.appendChild(option);
    } else {
        window.alert('Invalid value or already in list.');
    }

    document.getElementById('number').value = '';
    document.getElementById('number').focus();
}
)

document.getElementById('finish').addEventListener('click', () => {
    let result = document.getElementById('result');

    if (values.length == 0) {
        window.alert('add values before finishing.');
    } else {
        let total = values.length;
        let smaller = values[0];
        let bigger = values[0];
        let sum = 0;

        for (p in values) {
            sum += values[p];
            if (values[p] > bigger) {
                bigger = values[p];
            }

            if (values[p] < smaller) {
                smaller = values[p];
            }
        }

        let average = sum / total;

        result.innerHTML = `<p>There is a total of ${total} registered numbers.</p>`;
        result.innerHTML += `<p>The smaller number is ${smaller}.</p>`;
        result.innerHTML += `<p>The bigger number is ${bigger}.</p>`;
        result.innerHTML += `<p>The sum of all numbers is ${sum}.</p>`;
        result.innerHTML += `<p>The average of all numbers is ${average}.</p>`;
    }
})
