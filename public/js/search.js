// set 
const searchTerm = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-card').value.trim();
    document.location.replace(`/search/${searchInput}`)

    // return
    // console.log(searchInput);
}

//post pokemon to DB on add
const add = async (id, name, rarity, images) => {
    console.log(id);
    console.log(name);
    console.log(rarity);
    console.log(images);
    const response = await fetch(`/api/pokeRoutes`, {
        method: 'POST',
        body: JSON.stringify({ id, name, rarity, images }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(id);
    //post pokeUser 
    const data = { pokemon_id: id };
    const userResponse = await fetch(`/api/pokeUserRoutes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // if (response.ok) {
    //     document.location.replace(`/search/${searchInput}`);

    // } else {
    //     console.log('Poke-Failure: It was not very effective');
    // }
}
document.querySelector('.card-table').addEventListener('click', function (e) {
    if (e.target.classList.contains('card')) {
        add(e)
    }
})
document.querySelector('#add-form').addEventListener('submit', searchTerm)