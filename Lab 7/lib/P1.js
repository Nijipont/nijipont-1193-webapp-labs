fetch("https://api.github.com/users/Nijipont").then((response) => response.json())
.then((data) => {
        name_data = data.name;
        url_data = data.html_url;
        img_data = data.avatar_url;

        const my_url = document.createElement("a");
        my_url.href = url_data;
        document.body.appendChild(my_url);

        const my_name = document.createElement("h1");
        my_name.innerText = name_data;
        my_url.appendChild(my_name);

        const avatar = document.createElement("div");
        avatar.className = "avatar-img";
        avatar.style.backgroundImage = `url(${img_data})`;
        document.body.appendChild(avatar);
    });

