document.getElementById('triangle-calculator').addEventListener('click', function() {
    window.location.href = 'triangle.html';
});

document.getElementById('conversion').addEventListener('click', function() {
    alert('Conversion deg/min clicked');
});

function calculate() {
    const a = parseFloat(document.getElementById('coteA').value);
    const b = parseFloat(document.getElementById('coteB').value);
    const c = parseFloat(document.getElementById('coteC').value);
    const angleB = parseFloat(document.getElementById('angleB').value);
    const angleC = parseFloat(document.getElementById('angleC').value);

    if (a && b) {
        const c = Math.sqrt(a * a + b * b);
        document.getElementById('coteC').value = c.toFixed(2);
        const B = Math.asin(b / a) * (180 / Math.PI);
        document.getElementById('angleB').value = B.toFixed(2);
        document.getElementById('angleC').value = (90 - B).toFixed(2);
    } else if (a && c) {
        const b = Math.sqrt(a * a - c * c);
        document.getElementById('coteB').value = b.toFixed(2);
        const C = Math.asin(c / a) * (180 / Math.PI);
        document.getElementById('angleC').value = C.toFixed(2);
        document.getElementById('angleB').value = (90 - C).toFixed(2);
    } else if (b && c) {
        const a = Math.sqrt(b * b + c * c);
        document.getElementById('coteA').value = a.toFixed(2);
        const B = Math.atan(b / c) * (180 / Math.PI);
        document.getElementById('angleB').value = B.toFixed(2);
        document.getElementById('angleC').value = (90 - B).toFixed(2);
    } else if (a && angleB) {
        const b = a * Math.sin(angleB * (Math.PI / 180));
        document.getElementById('coteB').value = b.toFixed(2);
        const c = a * Math.cos(angleB * (Math.PI / 180));
        document.getElementById('coteC').value = c.toFixed(2);
        document.getElementById('angleC').value = (90 - angleB).toFixed(2);
    } else if (a && angleC) {
        const c = a * Math.sin(angleC * (Math.PI / 180));
        document.getElementById('coteC').value = c.toFixed(2);
        const b = a * Math.cos(angleC * (Math.PI / 180));
        document.getElementById('coteB').value = b.toFixed(2);
        document.getElementById('angleB').value = (90 - angleC).toFixed(2);
    } else if (b && angleB) {
        const a = b / Math.sin(angleB * (Math.PI / 180));
        document.getElementById('coteA').value = a.toFixed(2);
        const c = b / Math.tan(angleB * (Math.PI / 180));
        document.getElementById('coteC').value = c.toFixed(2);
        document.getElementById('angleC').value = (90 - angleB).toFixed(2);
    } else if (b && angleC) {
        const a = b / Math.cos(angleC * (Math.PI / 180));
        document.getElementById('coteA').value = a.toFixed(2);
        const c = b * Math.tan(angleC * (Math.PI / 180));
        document.getElementById('coteC').value = c.toFixed(2);
        document.getElementById('angleB').value = (90 - angleC).toFixed(2);
    } else if (c && angleB) {
        const a = c / Math.cos(angleB * (Math.PI / 180));
        document.getElementById('coteA').value = a.toFixed(2);
        const b = c * Math.tan(angleB * (Math.PI / 180));
        document.getElementById('coteB').value = b.toFixed(2);
        document.getElementById('angleC').value = (90 - angleB).toFixed(2);
    } else if (c && angleC) {
        const a = c / Math.sin(angleC * (Math.PI / 180));
        document.getElementById('coteA').value = a.toFixed(2);
        const b = c / Math.tan(angleC * (Math.PI / 180));
        document.getElementById('coteB').value = b.toFixed(2);
        document.getElementById('angleB').value = (90 - angleC).toFixed(2);
    } else {
        alert('Veuillez remplir au moins deux champs appropriés.');
    }
}

function clearForm() {
    document.getElementById('triangleForm').reset();
}
