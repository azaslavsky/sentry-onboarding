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
    const transaction = Sentry.startTransaction({ name: "is_it_prime" });
    const n = document.getElementById("num").value;
    if (n == -1 || n == 0 || n == 1) {
        // return print(n, false);
        throw new Error('Whoops, this is a domain-specific bug!');
    }

    const span = transaction.startChild({ op: "brute_force_portion" });
    let factors = 0;
    for (i = 0; i <= n; i++) {
        if (n % i == 0) {
            factors += 1;
        }
    }

    span.finish();
    transaction.finish();
    if (factors == 2) {
        return print(n, true);
    }
    return print(n, false);
}
