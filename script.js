document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('btnStart');
    const champEmail = document.getElementById('demoUser');
    const champPassword = document.getElementById('demoPass');
    const messageErreur = document.getElementById('error-message');

    // Fonction pour afficher l'erreur proprement
    function afficherErreur(msg) {
        messageErreur.textContent = msg;
        messageErreur.style.display = "block";
        // Petit effet visuel sur les inputs en cas d'erreur
        [champEmail, champPassword].forEach(el => el.style.borderColor = "#ff5555");
    }

    // Fonction de réinitialisation des styles
    function resetStyles() {
        messageErreur.style.display = "none";
        champEmail.style.borderColor = "#333";
        champPassword.style.borderColor = "#333";
    }

    bouton.addEventListener('click', () => {
        resetStyles();
        
        const eVal = champEmail.value.trim();
        const pVal = champPassword.value.trim();

        if (eVal.length < 3) {
            afficherErreur("Identifiant invalide.");
        } else if (pVal.length < 6) {
            afficherErreur("Mot de passe trop court.");
        } else {
            // Simulation d'un chargement réel
            bouton.disabled = true; 
            bouton.textContent = "Connexion...";
            
            setTimeout(() => { 
                // Mise à jour ici avec le bon nom !
                alert("Bienvenue sur LILYplay !"); 
                bouton.disabled = false;
                bouton.textContent = "Se connecter";
                champEmail.value = "";
                champPassword.value = "";
            }, 1000);
        }
    });

    // Validation avec touche Entrée
    [champEmail, champPassword].forEach(champ => {
        champ.addEventListener('keypress', (e) => { 
            if(e.key === 'Enter') bouton.click(); 
        });
    });
});
