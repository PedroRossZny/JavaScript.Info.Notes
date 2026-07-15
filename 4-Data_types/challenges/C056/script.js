function readNumber() {
    while(true) {
        let value = prompt("Enter a number please?", 0);

        if (isFinite(value)) {

            if (value === "" || value === null) {
                return null;
            } else {
                return +value;
            }

        }

    }
}

alert(`Read: ${readNumber()}`);
