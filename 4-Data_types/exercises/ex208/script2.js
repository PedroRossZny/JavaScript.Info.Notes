let title, width, height;

// error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100};

{
    // a code block
    let message = "Hello";
    // ...
    alert( message );
}

// okay now
({title, width, heigth} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
