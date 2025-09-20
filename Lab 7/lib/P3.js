fetch("files/places.json").then((response) => response.json())
    .then((data) => {
        const results = data.results;
        for (let places of results) {
            const lists_places = document.createElement("li");
            lists_places.innerHTML = `<span class="name">name = ${places.name}</span> <br><span class="location">location = ${places.geometry.location.lat} ${places.geometry.location.lng}</span></br>`;
            document.querySelector("ol").appendChild(lists_places);   
        }
    });