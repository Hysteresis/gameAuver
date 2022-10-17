//dans le html, recupere la classe .heures
var heuresDiv = document.querySelector('.heures');

//dans le html, recupere la classe .date
var dateDiv = document.querySelector('.date');

//ouverture
var ouvertureDiv = document.querySelector('.ouverture');

// horaire ouverture
var horaireOuverture = ['12h-15h', '19-22h'];


    //!creer la fonction affichageDate 
    var affichageDate = function(){
        
    // reuperre la date actuelle
    var dateToday = new Date();
    //recuperer l'annee
    var annee = dateToday.getFullYear();
    // recuperer l'index du jour de la semaine
    var jour = dateToday.getDay();
    //afficher le bon jour de la semaine a partir de l'index getDay()
    var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    //recuperer le jour
    var numeroJours = dateToday.getDate();
    // recuperer le mois
    var moi = dateToday.getMonth();
    //recuperer le mois a partir de l'index getMonth()
    var listeMois = ['Janv', 'Fev', 'Mars', 'Avril', 'Juin', 'Juillet', 'Aout', 'Sept', 'Oct','Nov', 'Dec'];
    //recuperer l'heure
    var heure = dateToday.getHours();
    //recupere les minutes
    var minute = dateToday.getMinutes();

    //ajouter le 0 si les minutes est par ex 19h02 et pas 19h2
    if (minute<10){
        minute = '0'+minute;
    }
    //ajouter le 0 si l'heure est par ex 09h02 et pas 9h02
    if (heure<10){
        heure = '0'+heure;
    }



    //afficher si ouvert ou fermé + mettre un bg vert ou rouge
    if (heure>18 && heure<24){
        ouverture = "Ouvert";
        document.getElementById('ouverture').style.backgroundColor = '#198754';

    } else {
        ouverture = "Fermé";
        document.getElementById('ouverture').style.backgroundColor = '#dc3545';  
    }
    // couleur de Police ouvert ou fermé
    document.getElementById('ouverture').style.color = 'whitesmoke';


    //affichage dans la div date avec la var dateDiv
    dateDiv.textContent = jours[jour]+ ' ' + numeroJours + ' ' + listeMois[moi] + ' ' + annee;

    //affichage dans la div heures 
    heuresDiv.textContent = heure + ' H ' + minute ;

    //affichage dans la div jours avec la var jourDiv
    document.getElementById('jourUn').innerHTML = jours['1'];
    document.getElementById('jourDeux').innerHTML = jours['2'];
    document.getElementById('jourTrois').innerHTML = jours['3'];
    document.getElementById('jourQuatre').innerHTML = jours['4'];
    document.getElementById('jourCinq').innerHTML = jours['5'];
    document.getElementById('jourSix').innerHTML = jours['6'];
    document.getElementById('jourZero').innerHTML = jours['0'];


    //affichage : ouvert ou fermé
    ouvertureDiv.textContent = ouverture;

}


// Raffraichissement ecran pour mettre a jour l'heure
setInterval(affichageDate, 1000);