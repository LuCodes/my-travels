import React from "react";

import Travel from "./Travel";

const travels = [
  {
    distance:"556,3 km via A89",
    destination: "France",
    ville: "Bordeaux",
    image:
      "https://images.sudouest.fr/2018/02/27/5a9536ce66a4bd2b3480a0e5/widescreen/1000x500/bordeaux-est-la-ville-ou-les-prix-ont-le-plus-flambe-en-20-ans.jpg"
  },
  {
    distance: "470,8 km via A8 et A7",
    destination: "France",
    ville: "Nice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-Côte_d%27Azur.jpg/1200px-Nizza-Côte_d%27Azur.jpg"
  },
  {
    distance: "460,2 km via A31 et A6",
    destination: "France",
    ville: "Metz",
    image:
      "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F12.2F06.2Ff3631797-fc11-4dfc-a984-f20b72573070.2Ejpeg/750x375/background-color/ffffff/quality/70/immobilier-encore-de-belles-affaires-a-saisir-dans-le-grand-est-a-strasbourg-metz-ou-nancy-1259509.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel distance={travel.distance} ville={travel.ville} image={travel.image} destination={travel.destination} />
))}
  </div>
);

export default Travels;