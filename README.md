# Team11

# HTF2015 nodejs Deploy instructies

### Project structuur
myApp/  ->conf   
        ->htdocs  
        ->data (optional)

#### conf
In deze map dien je volgende twee bestanden te voorzien:  

##### httpd-prefix.conf  
  
> Include “/opt/bitnami/apps/[myapp]/conf/httpd-app.conf" 

##### httpd-app.conf  

> ProxyPass / http://127.0.0.1:4000/  
> ProxyPassReverse / http://127.0.0.1:4000/  

#### data
dit is een optionele folder waarin je data kunt uploaden

### Server

In de map /opt/bitnami maak je de map apps aan   
> sudo mkdir /opt/bitnami/apps

Hier kan je dan met behulp van git (steeds sudo gebruiken) je repository binnen halen

via het commando  

> sudo vim /opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf

kan je volgende lijn toevoegen:  

> Include “/opt/bitnami/apps/myapp/conf/httpd-prefix.conf”

dan dien je enkel nog je apache te herstarten:  

> sudo /opt/bitnami/ctlscript.sh restart apache

En je node server opstarten uiteraard. Wanneer je klaar bent kan je volgend commando runnen om de server permanent te laten draaien:  

> node /opt/bitnami/nodejs/bin/forever start myapp.js

## Git instructions

Git commando's zijn gemakkelijk online te vinden maar hier toch een klein overzicht van wat je mogelijks nodig hebt:

#### Clone repo

Om te starten clone je deze repo lokaal en werk je in deze folder. Hier zet je ook de structuur in zoals hierboven beschreven:  

> git clone https://github.com/RoelandDS/Team[teamnumber].git

De link is op deze pagina ook te vinden

#### Git status
Voor een commit doe je best eerst eens

> git status

hier kan je zien of je eventueel folders of bestanden nog dient toe te voegen

> git add <path>

#### Git commit

Je project kan je committen via volgend commando:

> git commit -a -m <commit message between single quotes>

### Git pull

Alvorens je code naar github te pushen dien je de laatste versie binnen te halen

> git pull

Op de deploy servers dien je uiteraard enkel een pull uit te voeren. Vergeet sudo er in dat geval niet voor te zetten

### Git push

Nu moet je uiteraard nog je eigen code naar de server pushen

> git push

