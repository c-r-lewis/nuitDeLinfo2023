
// Id sous forme : [n° de la scène].[n° de l'élément de scène].[n° du message]

const gameFlow = [
    {
        id : "0.0.0", // Menu
        text : "Vous êtes une équipe d'astronaute, en quête de contact avec les vies extraterrestes, vous arrivez à Odothea, planète dont le centre de recherche à analysé des signes de vie suite à la réception d'un signal de détresse."
    },
    {
        id : "0.0.1",
        text : "Planète Odothea, 2050. Température 40°C. 48,886 ua de la planète Ertha. Etres vivant rencontré : 0.",
    },
    {
        id : "1.1.0" , //Avion
        text : "Il semblerait que les habitants d’Odothea se déplaçaient principalement en avion. Inquiétant étant donné que les avions émettent 2% d’émission des GES. (lien : https://www.sciencedirect.com/science/article/pii/S1352231020305689?via%3Dihub ) c’est certes moins que l’émission de GES du numérique, mais pour un trajet similaire, un avion consomme six fois plus d’énergie que le train. (https://www.greenpeace.fr/quel-moyen-de-transport-ecologique-adopter/ )"
    },
    {
        id : "1.1.1",
        text : "Il faut améliorer la conception de l’aviation et sa consommation pour réduire son impact. Par exemple, le premier secteur économique à se doter d’un mécanisme universel et contraignant de maîtrise de ses émissions de CO2 est l’aviation (https://www.ecologie.gouv.fr/sites/default/files/plaquette GMBMpap.pdf), mais ça ne suffira pas sans l’adapter nos mobilités en fonction de chaque trajet comme le permet ce simulateur (https://www.greenpeace.fr/voyage-ecologique/ ) et sans que les politiques en placent n’apportent d’éléments favorisant les consommateurs à choisir ces solutions."
    },
    {
        id : "1.2.0", //Vélo cassé
        text : "Dommage que ce vélo n’ait pas plus servi, il correspond à une solution de mobilité idéale, en effet son utilisation permettrait d’économiser 700 millions de tonnes d'émissions de GES (gaz à effet de serre) chaque année si nous effectuions quotidiennement nos courts trajets à vélo ( https://www.ecoco2.com/blog/courts-trajets-a-velo-des-economies-demissions-de-ges-importantes/ )."
    },
    {
        id : "1.2.1",
        text : "Hors, pour favoriser l’utilisation de la bicyclette, il faut des limitations sur l’usage de la voiture en milieu urbain, en effet des structures urbaines appropriées au cyclisme ne suffirait pas, car le danger principal pour les cyclistes provient de l’énergie cinétique développée par les véhicules à moteur, qui sont impliqués dans 9 cas d’accident sur 10. (https://www.cairn.info/revue-les-cahiers-de-mediologie-1998-1-page-151.htm#nn3 )."
    },
    {
        id : "1.3.0", // Voiture
        text : "Odothea elle aussi utilisait la mobilité motorisée individuelle au quotidien. Sur terre, selon un rapport de l'Agence européenne pour l'environnement, le transport était responsable d'environ un quart des émissions totales de CO2 de l'UE en 2019, dont 71,7 % provenaient du transport routier. (https://www.europarl.europa.eu/news/fr/headlines/society/20190313STO31218/emissions-de-co2-des-voitures-faits-et-chiffres-infographie )."
    },
    {
        id : "1.3.1", 
        text : "Sur terre, en 2019, le parc français routier comprenait 44,4 millions de véhicules dont 85 % de voitures particulières (https://www.notre-environnement.gouv.fr/themes/climat/les-emissions-de-gaz-a-effet-de-serre-et-l-empreinte-carbone-ressources/article/les-emissions-de-gaz-a-effet-de-serre-du-secteur-des-transports ). Il semblerait que la diminution de GES liés aux transports peut effectivement être plus complexe que d’autres secteurs."
    },
    {
        id : "1.3.2",
        text : " Il n’existe pas une seule solution, mais une combinaison de quatre types de politiques de réduction des GES : taxer les carburants, réglementer l’utilisation des véhicules plus polluants sur leur territoire, améliorer l’offre de transport en commun et mettre en place des politiques pour freiner l’étalement urbain. (https://lactualite.com/actualites/etude-diminuer-les-ges-des-transports-de-22-sans-affecter-la-qualite-de-vie/ ). Ainsi, cette combinaison de solutions permettrait une réduction de 31% de GES."
    },
    {
        id : "2.1.0", //Centrale à charbon
        text : "Selon nos observations,  les centrales à charbon sont partout, ce qui peut paraître logique avec un sol riche en charbon comme sur cette planète. Pourtant c’est une des formes de production d’énergie qui rejete le plus de co2. (https://www.cairn.info/revue-responsabilite-et-environnement-2022-1-page-31.htm)"
    },
    {
        id : "2.2.0", // Eolienne
        text : "Très peu d’énergie était produite par des sources d’énergie renouvelable, ce qui aurait pu sauver ce peuple malheureusement éteint. Visiblement, l’éolien n’était pas une solution qui a été développée. Pourtant cela et d’autres énergies renouvellables peuvent parfaitement subvenir au besoin d’une ville (https://www.ucsusa.org/resources/benefits-renewable-energy-use#.V3Y7npOLR24)"
    },
    {
        id : "2.3.0", //Centrale nucléaire
        text : "C’est la seule centrale nucléaire à des kilomètres à la ronde, ces habitants n’ont pas profité du fait que l’énergie nucléaire ne rejette pas de GES (gaz à effet de serre). Bien évidemment, ce n’est pas la solution qui permettra de produire de l’énergie indéfiniment (le nucléaire étant non renouvelable), mais cela aurait permis de réduire drastiquement l’émission de GES en tant que source d’énergie de transition entre le “tout non renouvelable” et le “tout renouvelable” (https://ekwateur.fr/blog/enjeux-environnementaux/calendrier-avent-nucleaire/)"
    },
]