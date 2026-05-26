document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('btnStart');
    const champEmail = document.getElementById('demoUser');
    const champPassword = document.getElementById('demoPass');
    const messageErreur = document.getElementById('error-message');

    bouton.addEventListener('click', () => {
        const eVal = champEmail.value.trim();
        const pVal = champPassword.value.trim();

        if (eVal.length < 3) {
            afficherErreur("Identifiant trop court (3 caractères min).");
        } else if (pVal.length < 6) {
            afficherErreur("Mot de passe trop court (6 caractères min).");
        } else {
            bouton.textContent = "Connexion...";
            setTimeout(() => { alert("Accès validé !"); bouton.textContent = "Tester le Design"; }, 500);
            messageErreur.style.display = "none";
        }
    });

    function afficherErreur(msg) {
        messageErreur.textContent = msg;
        messageErreur.style.display = "block";
    }

    // Validation avec touche Entrée
    champPassword.addEventListener('keypress', (e) => { if(e.key === 'Enter') bouton.click(); });
});
