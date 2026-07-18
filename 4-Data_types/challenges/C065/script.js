let styles = ["Jazz", "Blues"];
alert(styles);

styles.push("Rock-n-Roll");
alert(styles);

styles[Math.trunc(styles.length / 2)] = "Classics";
alert(styles);

styles.shift();
alert(styles);

styles.unshift("Rap", "Reggae");
alert(styles);
