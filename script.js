document.addEventListener('DOMContentLoaded', function() {
    
    // 1. On récupère tous nos éléments (IDs mis à jour pour la démo)
    const bouton = document.getElementById('btnStart');
    const champEmail = document.getElementById('demoUser'); // Changé pour correspondre au HTML démo
    const champPassword = document.getElementById('demoPass'); // Changé pour correspondre au HTML démo
    const messageErreur = document.getElementById('error-message');

    // 2. La fonction pour vérifier le format (Optionnelle en démo, mais on la garde pour ta structure)
    function estUnEmailValide(email) {
        // On accepte soit un email, soit un pseudo de plus de 3 caractères pour la démo
        return email.length >= 3;
    }

    // 3. Ce qu'il se passe quand on clique sur "Tester le Design"
    bouton.addEventListener('click', function() {
        const emailValue = champEmail.value.trim();
        const passValue = champPassword.value.trim();

        // On remet les bordures normales au début du clic
        champEmail.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        champPassword.style.border = "1px solid rgba(255, 255, 255, 0.5)";

        // VERIFICATION 1 : Est-ce que le champ identifiant est vide ?
        if (emailValue === "") {
            messageErreur.textContent = "L'identifiant de test est obligatoire.";
            messageErreur.style.display = "block";
            champEmail.style.border = "2px solid #ffa00a";
        } 
        // VERIFICATION 2 : Est-ce que l'identifiant est assez long ?
        else if (!estUnEmailValide(emailValue)) {
            messageErreur.textContent = "Veuillez saisir un identifiant valide (3 caractères min.).";
            messageErreur.style.display = "block";
            champEmail.style.border = "2px solid #ffa00a";
        }
        // VERIFICATION 3 : Est-ce que le mot de passe est trop court ?
        else if (passValue.length < 6) {
            messageErreur.textContent = "Le code de test doit faire au moins 6 caractères.";
            messageErreur.style.display = "block";
            champPassword.style.border = "2px solid #ffa00a";
        }
        // OK : Tout est bon !
        else {
            // On simule une validation sans envoyer de données
            bouton.textContent = "Connexion réussie...";
            setTimeout(() => {
                alert("Accès démo validé pour : " + emailValue);
                bouton.textContent = "Tester le Design >";
            }, 500);
            messageErreur.style.display = "none";
        }
    });

    // BONUS : Effacer l'erreur quand l'utilisateur re-tape dans les champs
    [champEmail, champPassword].forEach(input => {
        input.addEventListener('input', () => {
            messageErreur.style.display = "none";
            input.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        });
    });
});