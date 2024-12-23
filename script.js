// script.js
document.addEventListener('DOMContentLoaded', function() {
  // On récupère nos éléments
  const coteA   = document.getElementById('coteA');
  const coteB   = document.getElementById('coteB');
  const coteC   = document.getElementById('coteC');
  const angleA  = document.getElementById('angleA');
  const angleB  = document.getElementById('angleB');
  const angleC  = document.getElementById('angleC');
  const altitude= document.getElementById('altitude');

  const calcBtn = document.getElementById('calculateBtn');
  const clrBtn  = document.getElementById('clearBtn');

  // Vérifions que les boutons existent
  if (!calcBtn || !clrBtn) {
    console.error("Boutons introuvables dans le DOM !");
    return;
  }

  // On définit la fonction calculate()
  function calculate() {
    // (Ici, on récupère les valeurs et on calcule)
    let a = parseFloat(coteA.value);
    let b = parseFloat(coteB.value);
    let c = parseFloat(coteC.value);
    let AB = parseFloat(angleB.value);
    let AC = parseFloat(angleC.value);

    if (isNaN(a)) a = undefined;
    if (isNaN(b)) b = undefined;
    if (isNaN(c)) c = undefined;
    if (isNaN(AB)) AB = undefined;
    if (isNaN(AC)) AC = undefined;

    // Exemple : calcul côté a si b et c connus
    if (b !== undefined && c !== undefined) {
      const aCalc = Math.sqrt(b * b + c * c);
      coteA.value = aCalc.toFixed(2);
      // etc.
    }
    
    // On calcule l'altitude si a, b, c existants
    if (a > 0 && b > 0 && c > 0) {
      altitude.value = ((b * c) / a).toFixed(2);
    }
  }

  // On définit la fonction clearForm()
  function clearForm() {
    document.getElementById('triangleForm').reset();
    altitude.value = '';
  }

  // On “connecte” nos fonctions aux clics sur les boutons
  calcBtn.addEventListener('click', calculate);
  clrBtn.addEventListener('click', clearForm);
});
