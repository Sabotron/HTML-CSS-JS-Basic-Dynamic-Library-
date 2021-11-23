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
    clear();
    
}

/*-------------------------------------------------------------------------*/

function print()
{
    console.log("Esto ejecuta una función al cargar el HTML");
}

/*-------------------------------------------------------------------------*/

function set_name()
{
    var list = document.getElementById("dynamic_list");
    list.innerHTML = "";
    let get_books = JSON.parse(localStorage.getItem("n_book"));
    for(var i = 0; i < get_books.length;i++)
    {
    var new_li = document.createElement("li"); 
    new_li.textContent = get_books[i];
    list.appendChild(new_li);
    }
}
/*-------------------------------------------------------------------------*/

function clear()
{
    document.getElementById("book_input").innerHTML = "Type the Book's Name";
}

/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
