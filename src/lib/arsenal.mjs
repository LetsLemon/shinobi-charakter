// Values from chapter 11.2 of the embedded rulebook.
export const arsenal=[
 {id:'Kunai',damage:'1W4',type:'Stich',attr:'best',range:1.5,throwRange:6,far:18,price:100,info:'Finesse: KRA oder GES im Nahkampf. Als Wurfwaffe 6/18 m. Vielseitiges Werkzeug der Grundausrüstung.'},
 {id:'Shuriken',damage:'1W4',type:'Hieb',attr:'dex',range:9,far:27,price:50,info:'Wurfwaffe. Genau ein Shuriken pro Angriff. Größere normale Wurfreichweite als Kunai und Senbon.'},
 {id:'Senbon',damage:'1W4',type:'Stich',attr:'dex',range:6,far:18,price:20,info:'Wurfwaffe, für Gift geeignet. Gift kostet zusätzlich und braucht Vorbereitung nach Kapitel 11.4.'},
 {id:'Fūma-Shuriken',damage:'2W6',type:'Hieb',attr:'dex',range:12,far:36,price:2000,info:'Zweihändige Wurfwaffe. Hoher Grundschaden; braucht beide Hände.'},
 {id:'Tantō',damage:'1W6',type:'Stich',attr:'best',range:1.5,price:3000,info:'Finesse, leicht. KRA oder GES. Eine zweite Waffe gibt ohne entsprechendes Merkmal keinen Zusatzangriff.'},
 {id:'Katana',label:'Katana / Ninjatō',damage:'1W8',type:'Hieb',attr:'best',range:1.5,price:8000,info:'Finesse: KRA oder GES. Mehr Grundschaden als das Tantō.'},
 {id:'Großschwert',damage:'2W6',type:'Hieb',attr:'str',range:1.5,price:15000,info:'Zweihändig, verwendet KRA. Zählt als zwei Ausrüstungseinheiten.'},
 {id:'Kusarigama',damage:'1W6',type:'Hieb',attr:'best',range:3,price:5000,info:'KRA oder GES; erreicht Ziele auf 3 m. Entwaffnen und Fesseln entstehen nicht automatisch durch einen Treffer.'},
 {id:'Kriegsfächer',damage:'1W6',type:'Wucht',attr:'str',range:1.5,price:8000,info:'Zweihändig, Werkzeug für Fūton. Eine Naturtechnik muss trotzdem bekannt sein und bezahlt werden.'},
 {id:'Speer',label:'Speer / Naginata',damage:'1W10',type:'Stich',attr:'str',range:3,price:6000,info:'Zweihändig. KRA und 3 m Reichweite; geeignet, um einen Zugang zu halten.'},
 {id:'Bō',label:'Bō (Stab)',damage:'1W6',twoHand:'1W8',type:'Wucht',attr:'str',range:1.5,price:1000,info:'Einhändig 1W6, zweihändig 1W8. Beide Führungen werden auf der Karte angeboten.'},
 {id:'Bogen',damage:'1W8',type:'Stich',attr:'dex',range:45,far:180,price:4000,info:'Zweihändig, GES. Größte Reichweite dieser Auswahl; Pfeilvorrat mitführen.'}
];
export const weaponInfo=id=>arsenal.find(w=>w.id===id);
