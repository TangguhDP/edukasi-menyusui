import React from "react";
import Card from "../components/Card";

export default function Landing() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
      <Card to="/edukasi/asi" title="Asi Ekslusif" />
      <Card to="/edukasi/menyusui" title="Cara Menyusui" />
      <Card to="/edukasi/oksitosin" title="Hormon Oksitosin" />
      <Card to="/edukasi/partner-menyusui" title="Partner Menyusui" />
      <Card
        to="/hiburan/videos"
        title="Hiburan Audio Visual"
        className="col-span-2"
      />
      <Card
        to="/hiburan/vr-videos"
        title="Virtual Reality"
        className="col-span-2"
      />
    </div>
  );
}
