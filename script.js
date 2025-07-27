// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Fonction pour mettre à jour dynamiquement la date de l'auteur
    function updateAuthorDate() {
        const dateElement = document.getElementById('author-date');
        if (!dateElement) return;

        // Obtenir la date d'aujourd'hui
        const today = new Date();
        
        // La mettre à la date de la veille
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        // Formater la date en français
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = yesterday.toLocaleDateString('fr-FR', options);

        // Mettre à jour le texte
        dateElement.textContent = `Experte en Santé de la Peau | Écrit le ${formattedDate}`;
    }

    // Fonction pour faire apparaître les boutons au scroll
    function handleScrollButtonVisibility() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        if (ctaButtons.length === 0) return;

        // MODIFICATION : Définir à quelle hauteur les boutons doivent apparaître (en pixels)
        const showAtPixels = 600; 

        window.addEventListener('scroll', function() {
            // Vérifier la position du scroll
            if (window.scrollY > showAtPixels) {
                // Si l'utilisateur a assez scrollé, ajouter la classe 'visible'
                ctaButtons.forEach(button => {
                    button.classList.add('visible');
                });
            } else {
                // Sinon, la retirer
                ctaButtons.forEach(button => {
                    button.classList.remove('visible');
                });
            }
        });
    }

    // Appeler les fonctions au chargement de la page
    updateAuthorDate();
    handleScrollButtonVisibility();

});


