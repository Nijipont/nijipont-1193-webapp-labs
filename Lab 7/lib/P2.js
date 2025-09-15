fetch("files/students.json").then((response) => response.json())
    .then((data) => {
        const wclass = data.wclass;
        console.log(wclass);
        for (let person of wclass) {
            const list_student = document.createElement("li");
            list_student.innerHTML = `${person.student["@attributes"].id} <b>${person.student.name}</b> has skills <i>${person.student.skill}</i>`;
            document.querySelector("ol").appendChild(list_student);   
        }
    });