const buttons = document.querySelectorAll("button");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {

        const joueur = buttons[index].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        let scorejoueur = "0";
        let scorerobot = "0";
        let victoire_utilisateur = 0;



        if (joueur === robot) {
            resultat = "Egalité";

        }

        else if (
            (joueur === "Pierre" && robot === "Ciseau") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseau" && robot === "Feuille")
        ) {
            resultat = "Gagné";
            scorejoueur++;
        }

        else {
            resultat = "Perdu";
            scorerobot++;
        }
        document.querySelector(".resultat").innerHTML = `
            Vous : ${joueur} </br>
            Robot : ${robot} </br>
            Résultat : ${resultat}   `

        document.querySelector(".scorejoueur", ".scorerobot").innerHTML = `
            Votre score : ${scorejoueur} </br>
            Score du Robot : ${scorerobot} </br>  `
    })
}