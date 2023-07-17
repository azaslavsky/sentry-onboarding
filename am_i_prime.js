function print(n, success) {
    const resDiv = document.getElementById("result");
    const color = success ? "green" : "red";
    const text = success ? "IS" : "IS NOT"
    resDiv.innerHTML = `<p style="color: ${color};">${n} ${text} prime!</p>`;
}

function clear() {
    const resDiv = document.getElementById("result");
    resDiv.innerHTML = '';
}

// We purposefully use the brute force method, so that later when we add a transaction big numbers
// show up as performance regressions.
function is_it_prime() {
    const n = document.getElementById("num").value;
    if (n == 1) {
        return print(n, false);
    }

    let factors = 0;
    for (i = 0; i <= n; i++) {
        if (n % i == 0) {
            factors += 1;
        }
    }

    if (factors == 2) {
        return print(n, true);
    }
    return print(n, false);
}
