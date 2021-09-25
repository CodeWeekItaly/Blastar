function sendmail(){
    var container = 'Nome: ';
    let v = document.getElementById("nome").value;

    container += v + "\nCognome: : ";
    v = document.getElementById("cognome").value;

    container += v + "\nNumero di telefono: ";
    v = document.getElementById("numero").value;

    container += v + "\n\n";

    container = document.getElementById("messaggio").value;

    window.open('mailto:spicacontacts@gmail.com?subject=Pre-ordine&body=' + container);
}