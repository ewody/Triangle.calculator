// On attend que tout le HTML (DOM) soit chargé
document.addEventListener('DOMContentLoaded', () => {

  // Récupération des éléments par leur ID
  const coteA    = document.getElementById('coteA');
  const coteB    = document.getElementById('coteB');
  const coteC    = document.getElementById('coteC');
  const angleA   = document.getElementById('angleA');
  const angleB   = document.getElementById('angleB');
  const angleC   = document.getElementById('angleC');
  const altitude = document.getElementById('altitude');

  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn     = document.getElementById('clearBtn');

  // Vérification : si un bouton n'existe pas, on arrête
  if (!calculateBtn || !clearBtn) {
    console.error("Boutons introuvables dans le DOM !");
    return;
  }

  // --- Fonction "Calculer" ---
  function calculate() {
    // Récupérer les valeurs
    let a = parseFloat(coteA.value);
    let b = parseFloat(coteB.value);
    let c = parseFloat(coteC.value);
    let AB = parseFloat(angleB.value);
    let AC = parseFloat(angleC.value);

    // Si c'est NaN => on met undefined
    if (isNaN(a))  a  = undefined;
    if (isNaN(b))  b  = undefined;
    if (isNaN(c))  c  = undefined;
    if (isNaN(AB)) AB = undefined;
    if (isNaN(AC)) AC = undefined;

    // Exemple : si b et c connus => calculer a
    if (b !== undefined && c !== undefined) {
      const aCalc = Math.sqrt(b*b + c*c);
      coteA.value = aCalc.toFixed(2);
      a = aCalc;

      // Calcul des angles
      const B = Math.atan(b / c) * (180 / Math.PI);
      angleB.value = B.toFixed(2);
      angleC.value = (90 - B).toFixed(2);
    }
    // Autres cas : a + b connus => calcul c, etc.
    // (Ici, tu peux recopier et adapter les blocs de calcul que tu avais)

    // Calcul de l'altitude si a, b, c sont valides
    if (a > 0 && b > 0 && c > 0) {
      const alt = (b * c) / a;
      altitude.value = alt.toFixed(2);
    }
  }

  // --- Fonction "Effacer" ---
  function clearForm() {
    // Réinitialise tout le formulaire
    document.getElementById('triangleForm').reset();
    // Vide explicitement l’altitude
    altitude.value = '';
  }

  // On associe les fonctions aux clics sur les boutons
  calculateBtn.addEventListener('click', calculate);
  clearBtn.addEventListener('click', clearForm);
});
