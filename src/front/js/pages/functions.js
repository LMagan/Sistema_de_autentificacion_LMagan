SingUp: () => {
    fetch("https://symmetrical-space-goldfish-5gxvr464q5pjhjxg-3001.app.github.dev/api/sing_up", {
        method: "POST",

    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

        })
        .catch((error) => console.log(error));
}