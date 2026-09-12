import {newCharacter,recommend,newMap,jutsuSlots,options} from './model.mjs';
export const levelHint=l=>l<4?'Genin · nach Teamprüfung':l<9?'Chūnin möglich · ab Stufe 4':'Jōnin möglich · ab Stufe 9';
export const statusOptions=[{value:'offiziell',label:'Im Dorfdienst'},{value:'abtruennig',label:'Abtrünnig / Nukenin'},{value:'frei',label:'Unabhängig · mit SL vereinbaren'}];
export const characterPresets=[
  {
    "id": "konoha",
    "name": "Hyūga Mizuki",
    "village": "Konoha",
    "clan": "Hyūga",
    "main": "tai",
    "side": "sensor",
    "nature": "Doton",
    "age": 16,
    "level": 3,
    "background": "Genin aus einem Konoha-Dreierteam",
    "goal": "Die Chūnin-Auswahl bestehen und ihren ersten eigenen Aufklärungstrupp führen.",
    "bond": "Ihr Teamkamerad Daichi verlässt sich im Kampf auf ihre Sichtzeichen.",
    "bond2": "Ihr Großvater unterrichtet sie morgens im Jūken und hält wenig von ihren improvisierten Griffen.",
    "scar": "Bei einer Verfolgung verließ sie ihre Position, um den Flüchtigen selbst zu stellen. Daichi fing den Angriff ab, den sie hätte melden müssen.",
    "story": "Mizuki bindet die langen Ärmel vor jedem Training mit demselben abgenutzten Band zurück. Im Clan-Dōjō kämpft sie sauber; draußen nutzt sie auch Schlamm, Ellenbogen und Draht. Mit Daichi streitet sie darum, wer bei der nächsten Prüfung die Führung übernimmt. Seit ihrer letzten Mission lässt er ihre Handzeichen erst bestätigen. Das ärgert sie mehr, als sie zugibt.",
    "play": "Byakugan zur Aufklärung einsetzen, mit Jūken gezielt in den Nahkampf gehen und dem Team Sichtinformationen geben. Aktivierung und Chakra-Kosten des Auges beachten.",
    "training": "Jūken und Byakugan nach Hyūga-Regeltext. Das Byakugan ist nicht ständig kostenlos aktiv. Daichi kennt ihre üblichen Handzeichen; fremde Verbündete müssen sie erst lernen.",
    "groups": [
      "Taijutsu",
      "Hyūga"
    ]
  },
  {
    "id": "suna",
    "name": "Shiba",
    "village": "Suna",
    "clan": "Clanlos",
    "main": "nin",
    "side": "fu",
    "nature": "Fūton",
    "age": 17,
    "level": 3,
    "background": "Genin der Suna-Grenzpatrouille",
    "goal": "Einen entführten Kameraden aus der Gewalt einer Söldnergruppe holen.",
    "bond": "Ihre Teamführerin ließ den Trupp beim ersten echten Hinterhalt zurückweichen und rettete damit zwei Leben.",
    "bond2": "Ihr verschwundener Teamkamerad Enji baute mit ihr Sprengsiegel-Fallen im Übungsgelände.",
    "scar": "Shiba nennt den Rückzug vor anderen Feigheit. Insgeheim weiß sie, dass sie selbst zuerst zur Flucht ansetzte.",
    "story": "Shiba hält die Schutzbrille auch im Dorf um den Hals. Sie ist schnell mit großen Ansagen und überraschend geduldig, wenn sie einen Zünder vorbereitet. Auf Patrouille trägt sie Enjis Ersatzkunai. Ihre Teamführerin hat die Suche an einen erfahrenen Trupp übergeben; Shiba versucht herauszufinden, wann und über welche Route dieser aufbricht.",
    "play": "Fūton für Distanz und Druck nutzen, Sprengsiegel vorbereiten und Gegner durch Engstellen lenken. Flächen treffen auch Verbündete; das Team muss wissen, wo die Fallen liegen.",
    "groups": [
      "Fūton",
      "Fūinjutsu"
    ]
  },
  {
    "id": "kiri",
    "name": "Hōzuki Ren",
    "village": "Kiri",
    "clan": "Hōzuki",
    "main": "ken",
    "side": "sensor",
    "nature": "Suiton",
    "age": 18,
    "level": 3,
    "weapon": "Kusarigama",
    "background": "Genin mit Ausbildung in lautloser Tötung",
    "goal": "Für eine anspruchsvolle Klingen-Ausbildung ausgewählt werden, ohne wieder einen Kameraden als Köder einzusetzen.",
    "bond": "Seine Ausbilderin zählt Missionsergebnisse genauer als Verletzte.",
    "bond2": "Die Kunoichi Naho trainiert mit ihm, obwohl er sie beim letzten Test absichtlich im Nebel stehen ließ.",
    "scar": "Naho trägt seit diesem Test eine Narbe am Unterarm. Ren hat sich entschuldigt; sie nimmt deshalb seine Befehle noch lange nicht an.",
    "story": "Ren möchte eines Tages eine der berühmten Klingen Kiris führen. Bis dahin trainiert er mit einer gewöhnlichen Kusarigama und muss verlorene Kettenglieder selbst ersetzen. Er lächelt gern vor einem Übungskampf. Sobald Nebel aufzieht, hört er auf zu reden und achtet auf Atemzüge und Wassergeräusche. Naho kann ihn mit einem einzigen Kommentar aus dieser Ruhe bringen.",
    "play": "Nebel, Aufklärung und die Reichweite der Kusarigama verbinden. Nebel nimmt auch dem eigenen Team die Sicht; genaue Ortung muss tatsächlich vorhanden sein. Hydrifikation nach ihrem Regeltext einsetzen.",
    "training": "Gewöhnliche Kusarigama, keine legendäre Klinge. Lautlose Tötung ist sein Ausbildungsziel und gewährt keinen freien Treffer.",
    "groups": [
      "Suiton"
    ]
  },
  {
    "id": "kumo",
    "name": "Arata",
    "village": "Kumo",
    "clan": "Clanlos",
    "main": "tai",
    "side": "nin",
    "nature": "Raiton",
    "age": 17,
    "level": 3,
    "background": "Genin eines Kumo-Abfangteams",
    "goal": "Seine Rivalin bei der nächsten Teamprüfung schlagen und sich für Einsätze außerhalb des Blitzreichs qualifizieren.",
    "bond": "Seine Rivalin Suzu wartet beim Training nie, bis er wieder Luft bekommt.",
    "bond2": "Sein Sensei lässt ihn nach jeder Mission erklären, welche Entscheidung er rückblickend ändern würde.",
    "scar": "Arata verwechselt Standhalten manchmal mit Helfen. Bei einem Rückzug blieb er stehen und zwang sein Team zur Umkehr.",
    "story": "Arata wickelt vor dem Sparring sorgfältig die Hände und vergisst regelmäßig, danach die Verbände einzusammeln. Er liebt direkte Duelle. Im Teamtraining trifft Suzu ihn deshalb fast immer aus einem Winkel, den er gerade ignoriert. Seit dem ersten Grenzauftrag fragt er vor dem Losstürmen nach ihrer Position. Meistens jedenfalls.",
    "play": "Mit Taijutsu Druck auf ein einzelnes Ziel ausüben und die eigene Stellung halten. Raiton ergänzt den Nahkampf. Keine automatische Blitzrüstung; nur bekannte Techniken und Wegmerkmale verwenden.",
    "groups": [
      "Taijutsu",
      "Raiton"
    ]
  },
  {
    "id": "iwa",
    "name": "Iori",
    "village": "Iwa",
    "clan": "Clanlos",
    "main": "med",
    "side": "nin",
    "nature": "Doton",
    "age": 25,
    "level": 3,
    "status": "abtruennig",
    "background": "Desertierter Iwa-Sanitäter",
    "goal": "Seinen früheren Teamkameraden lebend erreichen, bevor dessen Auftrag zur Jagd auf ihn beginnt.",
    "bond": "Sein früherer Teamführer kennt Ioris Rückzugssignale und bevorzugte Verstecke.",
    "bond2": "Eine Nukenin-Vermittlerin verschafft ihm Aufträge gegen Heilbehandlungen.",
    "scar": "Er brachte einen gefangenen feindlichen Genin über die Grenze, statt ihn auszuliefern. Den Kameraden, der ihm die Flucht ermöglichte, ließ er zurück.",
    "story": "Iori trägt sein Iwa-Stirnband mit der eingeschnittenen Dorfmarke unter dem Mantel. Er arbeitet als Sanitäter für Trupps, die in keinem Dorf ein Hospital betreten können. Vor einem Auftrag fragt er zuerst nach dem Rückweg und dann nach dem Geld. Als ein Suchtrupp seine letzte Unterkunft fand, erkannte er an den gesetzten Erdmarken, wer ihn verfolgt.",
    "play": "Verbündete behandeln und mit Doton Rückzüge sichern. Iori kann einen Trupp am Leben halten, braucht aber Schutz, wenn Gegner ihn binden. Seine Dorfakte ist kein Allgemeinwissen jedes Händlers.",
    "groups": [
      "Iryō",
      "Doton"
    ]
  },
  {
    "id": "ame",
    "name": "Reika",
    "village": "Ame",
    "clan": "Clanlos",
    "main": "gen",
    "side": "sensor",
    "nature": "Suiton",
    "age": 21,
    "level": 3,
    "status": "abtruennig",
    "background": "Ehemalige Kunoichi einer Ame-Aufklärungszelle",
    "goal": "Den Auftraggeber finden, der die Decknamen ihres Teams verkauft hat.",
    "bond": "Ihr ehemaliger Partner Kase hat ihren letzten vereinbarten Treffpunkt nicht aufgesucht.",
    "bond2": "Ein Waffenhändler kennt sie unter einer falschen Identität und schätzt ihre zuverlässigen Lieferungen.",
    "scar": "Sie gab Kase die Schuld für die aufgeflogene Mission. Erst auf der Flucht fand sie ein Detail, das ihre eigene Kontaktperson belastet.",
    "story": "Reika wechselte früher für jeden Auftrag Stimme und Haltung. Seit der Flucht fällt es ihr schwer, eine angenommene Rolle wieder abzulegen. Sie verkauft Informationen an kleine Nukenin-Trupps und nimmt selten einen Auftrag an, bei dem sie töten soll. Für einen brauchbaren Hinweis auf Kase riskiert sie allerdings mehr, als ihr Geschäftsgebaren vermuten lässt.",
    "play": "Mit Genjutsu falsche Eindrücke erzeugen, Gegner voneinander trennen und über Sensorik den Rückweg prüfen. Illusionen geben Reika kein Wissen über unbeobachtete Gespräche.",
    "groups": [
      "Genjutsu",
      "Suiton"
    ]
  }
];
export function characterFromPreset(id){const p=characterPresets.find(p=>p.id===id);if(!p)throw Error('Unbekannte Charaktervorlage');let c=recommend({...newCharacter(),...Object.fromEntries(['name','village','clan','main','side','nature','age','level','background','goal','bond','bond2','scar','weapon','status','training'].filter(k=>p[k]!==undefined).map(k=>[k,p[k]]))});c.feats=({tai:['Zäh','Fluchtinstinkt'],nin:['Chakra-Reservoir','Einhändige Zeichen'],ken:['Wachsam','Einhändige Zeichen'],med:['Chakra-Reservoir','Zäh'],gen:['Unbewegt','Chakra-Reservoir'],fu:['Sprengsatzexperte','Chakra-Reservoir'],sensor:['Wachsam','Schattenläufer']}[c.main]||['Zäh','Wachsam']).slice(0,c.feats.length);let used=new Set();for(const slot of jutsuSlots(c).sort((a,b)=>options(c,a).length-options(c,b).length)){let choices=options(c,slot).filter(j=>!used.has(j.id));choices.sort((a,b)=>score(b)-score(a));const j=choices[0];if(j){c.jutsu[slot.key]=j.id;used.add(j.id)}}function score(j){return p.groups.reduce((n,g,i)=>n+(j.Gruppe.includes(g)?10-i:0),0)}c.notes=p.story+'\n\nSpielweise: '+p.play;c.knownBy=p.status==='abtruennig'?'Das Herkunftsdorf kennt die Dienstakte. Andere Personen kennen den Status nur, wenn sie davon erfahren haben.':'';return c;}
export const mapPresets=[
 {id:'river',name:'Waldsteg an der Landesgrenze',setting:'Feuerreich · Flussübergang',description:'Ein schmaler Steg, bewachsene Ufer und eine zweite Furt im Süden.',objective:'Eine Kurierrolle und ihren verletzten Träger über den Fluss bringen.',notes:'Start im Westen, Abzug im Osten. Die Furt im Süden kostet zusätzliche Bewegung. Der Gegner kann den Übergang halten oder die Rolle verfolgen. Die Karte enthält keine festgelegten Gegner.'},
 {id:'pass',name:'Versorgungsstation im Fels',setting:'Windreich · Karawanenroute',description:'Zwei Durchgänge, eine offene Ladefläche und Vorräte als Deckung.',objective:'Die Wasserladung bergen, bevor die Angreifer sie abtransportieren.',notes:'Zugang im Westen und Süden. Felsen blockieren die direkte Sicht; hinter den Vorräten ist halbe Deckung möglich. Ein beladener Wagen braucht den breiten südlichen Weg.'},
 {id:'harbor',name:'Anleger zwischen den Inseln',setting:'Wasserreich · Fischereihafen',description:'Zwei Lagerhäuser am Kai, enge Zugänge und Wasser entlang der Ostseite.',objective:'Die gesuchte Person am Kai stellen, bevor ihr Boot ablegt.',notes:'Lagerhäuser sind blockierende Grundrisse, keine begehbaren Innenräume. Der Durchgang zwischen ihnen bietet eine kurze Schusslinie. Boot und Abfahrtszeit legt die SL fest; Wasserlauf nach Regeltext prüfen.'},
 {id:'rain',name:'Wartungshof im Regen',setting:'Ame · Pumpenviertel',description:'Ein eingezäunter Hof mit Maschinenblöcken, schmalen Wartungsgängen und einer Entwässerungsrinne.',objective:'Eine Kontaktperson aus dem Hof führen und den Beutel mit den Meldungen sichern.',notes:'Im Westen liegt der Eingang, im Osten ein Wartungsausgang. Maschinen sind feste Hindernisse. Regen allein erzeugt keinen automatischen Kampfmalus. Der südliche Weg ist länger, bietet aber mehr Deckung.'}
];
export function mapFromPreset(id){const p=mapPresets.find(p=>p.id===id);if(!p)throw Error('Unbekannte Kartenvorlage');let m=newMap(p.name);m.objective=p.objective;m.notes=p.notes;const rect=(x,y,w,h,t)=>{for(let a=x;a<x+w;a++)for(let b=y;b<y+h;b++)m.terrain[a+','+b]=t};
 if(id==='river'){rect(9,0,3,14,'water');rect(0,5,20,2,'path');rect(9,11,3,1,'rough');for(const [x,y]of [[3,2],[5,9],[15,2],[16,10]]){rect(x,y,2,2,'rough');rect(x,y,1,1,'wall')}rect(7,4,1,1,'cover');rect(13,7,1,1,'cover')}
 if(id==='pass'){rect(4,0,3,5,'wall');rect(4,9,3,5,'wall');rect(13,0,3,4,'wall');rect(14,8,6,3,'wall');rect(0,6,14,2,'path');rect(9,7,3,7,'path');rect(8,3,2,2,'cover');rect(11,4,2,1,'cover');rect(17,3,3,2,'rough')}
 if(id==='harbor'){rect(15,0,5,14,'water');rect(1,1,5,4,'wall');rect(1,9,5,4,'wall');rect(6,5,9,3,'path');rect(13,0,2,14,'path');rect(15,3,3,2,'path');rect(15,10,4,2,'path');rect(8,2,2,2,'cover');rect(9,10,2,2,'cover');rect(11,6,1,1,'cover')}
 if(id==='rain'){rect(2,1,16,1,'wall');rect(2,12,16,1,'wall');rect(2,1,1,4,'wall');rect(2,8,1,5,'wall');rect(17,1,1,5,'wall');rect(17,8,1,5,'wall');rect(6,3,3,3,'wall');rect(11,7,3,3,'wall');rect(0,6,20,1,'water');rect(3,5,14,1,'path');rect(4,6,2,1,'path');rect(15,6,2,1,'path');rect(5,10,2,1,'cover');rect(14,3,2,1,'cover')}
 return m;}
