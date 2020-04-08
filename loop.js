function print(string) {

    let n = string.length;

    for (let i = 0; i < n; i++) {
        console.log(String.fromCharCode(string.charCodeAt(i) - 32));
    }
}

print("emma");