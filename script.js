/********************************
 *  1) CALCUL DES PARAMÈTRES DU TRIANGLE
 ********************************/
function calculate() {
    let a = parseFloat(document.getElementById('coteA').value); // Hypoténuse
    let b = parseFloat(document.getElementById('coteB').value);
    let c = parseFloat(document.getElementById('coteC').value);
    let angleB = parseFloat(document.getElementById('angleB').value);
    let angleC = parseFloat(document.getElementById('angleC').value);

    // Nettoyer un peu : si c'est NaN, on met undefined
    if (isNaN(a)) a = undefined;
    if (isNaN(b)) b = undefined;
    if (isNaN(c)) c = undefined;
    if (isNaN(angleB)) angleB = undefined;
    if (isNaN(angleC)) angleC = undefined;

    // 1) On connaît b et c => calculer a, angles B et C
    if (b !== undefined && c !== undefined) {
        const aCalc = Math.sqrt(b*b + c*c); // Hypoténuse
        document.getElementById('coteA').value = aCalc.toFixed(2);
        a = aCalc;

        // angles
        const B = Math.atan(b / c) * (180 / Math.PI);
        document.getElementById('angleB').value = B.toFixed(2);
        const C = 90 - B;
        document.getElementById('angleC').value = C.toFixed(2);
    }
    // 2) On connaît a (hypoténuse) et b => calculer c, angles
    else if (a !== undefined && b !== undefined) {
        if (b < a) {
            const cCalc = Math.sqrt(a*a - b*b);
            document.getElementById('coteC').value = cCalc.toFixed(2);
            c = cCalc;

            const B = Math.asin(b / a) * (180 / Math.PI);
            document.getElementById('angleB').value = B.toFixed(2);
            document.getElementById('angleC').value = (90 - B).toFixed(2);
        } else {
            alert("Erreur : b ne peut pas être supérieur à a (hypoténuse) !");
        }
    }
    // 3) On connaît a (hypoténuse) et c => calculer b, angles
    else if (a !== undefined && c !== undefined) {
        if (c < a) {
            const bCalc = Math.sqrt(a*a - c*c);
            document.getElementById('coteB').value = bCalc.toFixed(2);
            b = bCalc;

            const C = Math.asin(c / a) * (180 / Math.PI);
            document.getElementById('angleC').value = C.toFixed(2);
            document.getElementById('angleB').value = (90 - C).toFixed(2);
        } else {
            alert("Erreur : c ne peut pas être supérieur à a (hypoténuse) !");
        }
    }
    // 4) On connaît a et angleB => on calcule b et c
    else if (a !== undefined && angleB !== undefined) {
        const bCalc = a * Math.sin(angleB * (Math.PI / 180));
        document.getElementById('coteB').value = bCalc.toFixed(2);
        b = bCalc;

        const cCalc = a * Math.cos(angleB * (Math.PI / 180));
        document.getElementById('coteC').value = cCalc.toFixed(2);
        c = cCalc;

        document.getElementById('angleC').value = (90 - angleB).toFixed(2);
    }
    // 5) On connaît a et angleC => on calcule b et c
    else if (a !== undefined && angleC !== undefined) {
        const cCalc = a * Math.sin(angleC * (Math.PI / 180));
        document.getElementById('coteC').value = cCalc.toFixed(2);
        c = cCalc;

        const bCalc = a * Math.cos(angleC * (Math.PI / 180));
        document.getElementById('coteB').value = bCalc.toFixed(2);
        b = bCalc;

        document.getElementById('angleB').value = (90 - angleC).toFixed(2);
    }
    // 6) On connaît b et angleB => a = b / sin(B), c = ?
    else if (b !== undefined && angleB !== undefined) {
        const aCalc = b / Math.sin(angleB * (Math.PI / 180));
        document.getElementById('coteA').value = aCalc.toFixed(2);
        a = aCalc;

        const cCalc = Math.sqrt(aCalc*aCalc - b*b);
        document.getElementById('coteC').value = cCalc.toFixed(2);
        c = cCalc;

        document.getElementById('angleC').value = (90 - angleB).toFixed(2);
    }
    // etc. => on peut compléter pour d’autres combinaisons…

    else {
        alert("Veuillez remplir au moins deux champs appropriés (dont la cohérence).");
    }

    // === CALCUL DE L'ALTITUDE (depuis l'angle droit A) ===
    if (a > 0 && b > 0 && c > 0) {
        const altitude = (b * c) / a;
        document.getElementById('altitude').value = altitude.toFixed(2);
    }
}

/***************************
 *  2) EFFACER LE FORMULAIRE 
 ***************************/
function clearForm() {
    document.getElementById('triangleForm').reset();
    document.getElementById('altitude').value = '';
}
