export default function generateCargos() {
  const cities = [
    "Wörth am Rhein","Karlsruhe","Mannheim","Heidelberg","Stuttgart","Frankfurt am Main",
    "München","Berlin","Hamburg","Köln","Düsseldorf","Nürnberg","Freiburg","Mainz",
    "Ludwigshafen","Speyer","Landau","Germersheim","Rastatt","Baden-Baden","Pforzheim",
    "Ulm","Augsburg","Regensburg","Dortmund","Essen","Duisburg","Bonn","Aachen",
    "Kaiserslautern","Saarbrücken","Trier","Koblenz","Wiesbaden","Darmstadt","Offenbach",
    "Heilbronn","Tübingen","Reutlingen","Konstanz","Würzburg","Erlangen","Bamberg",
    "Passau","Rosenheim","Ingolstadt","Fürth","Leverkusen","Solingen","Wuppertal",
    "Bochum","Gelsenkirchen","Bielefeld","Münster","Osnabrück","Braunschweig","Hannover",
    "Bremen","Lübeck","Kiel","Rostock","Dresden","Leipzig","Chemnitz","Jena","Erfurt",
    "Magdeburg","Potsdam","Cottbus"
  ];
  const vehicles = [];
for (let i = 1; i <= 40; i++) vehicles.push(`Sprinter #${String(i).padStart(2,"0")}`);
for (let i = 1; i <= 15; i++) vehicles.push(`LKW #${String(i).padStart(2,"0")}`);
for (let i = 1; i <= 8; i++) vehicles.push(`Schiff #${String(i).padStart(2,"0")}`);
  const statuses = ["unterwegs","zugestellt","wartend","verarbeitung"];
  const goods = [
    "Elektronik","Möbel","Textilien","Lebensmittel","Baumaterial","Maschinenteile",
    "Medizinprodukte","Autoteile","Bürobedarf","Haushaltswaren","Sportgeräte",
    "Kosmetik","Spielzeug","Gartengeräte","Industriebedarf","Verpackungsmaterial",
    "Chemikalien","Druckerzeugnisse","Glaswaren","Keramik","Kunststoff",
    "Metallwaren","Papier","Pharmazeutika","Sanitär","Werkzeuge"
  ];
  const lastNames = ["Müller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Schulz","Hoffmann","Koch","Richter","Klein","Wolf","Schröder","Neumann","Schwarz","Braun","Zimmermann","Krüger"];
  const companyTypes = ["GmbH","AG","e.K.","OHG","KG","UG","& Co.","Logistik","Handel","Versand"];
  const r = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const rn = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const cargos = [];
  for (let i = 0; i < 100; i++) {
    const d = new Date(2026, 1, rn(1, 16));
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const st = r(statuses);
    const prog = st === "zugestellt" ? 100 : st === "unterwegs" ? rn(30, 85) : st === "verarbeitung" ? rn(10, 35) : rn(5, 20);
    let from = r(cities), to = r(cities);
    while (to === from) to = r(cities);
    const w = rn(20, 2400);
    cargos.push({
      id: `AEX-${d.getFullYear()}${mm}${dd}-${String(rn(1, 999)).padStart(3, "0")}`,
      from, to,
      weight: w >= 1000 ? `${(w / 1000).toFixed(1)} t` : `${w} kg`,
      status: st,
      progress: prog,
      date: `${dd}.${mm}.${d.getFullYear()}`,
      vehicle: r(vehicles),
      goods: r(goods),
      receiver: `${r(lastNames)} ${r(companyTypes)}`,
    });
  }
  return cargos;
}