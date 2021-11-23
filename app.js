function get_name()
{
    const name = document.getElementById("book_input").value;

    console.log('Nombre del libro: ', name);

    let stored_books = JSON.parse(localStorage.getItem("n_book"));
    if(!stored_books)
    {
        stored_books = [];
    }
    stored_books.push(name);
    localStorage.setItem("n_book", JSON.stringify(stored_books));
    set_name();
}

/*-------------------------------------------------------------------------*/

function print()
{
    console.log("Esto ejecuta una función al cargar el HTML");
}

/*-------------------------------------------------------------------------*/

function set_name()
{
    const get_books = JSON.parse(localStorage.getItem("n_book"));
    for(var i = 0; i < get_books.length;i++)
    {
        
    console.log('Nombre del libro: ', get_books[i]);
    document.getElementById
    }
}
/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
