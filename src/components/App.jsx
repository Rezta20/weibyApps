import React from "react";

import Title from "./homepage/title/Title";
import PicturePlayer from "./homepage/picturePlayer/PicturePlayer";
import Search from "./homepage/search/Search";
import Hot from "./homepage/hot/Hot";
import Place from "./homepage/place/Place";
import Info from "./homepage/info/Info";
import Footer from "./homepage/footer/Footer";

function App() {
  return (
    <div>
      <Title />
      <PicturePlayer />
      <Search />
      <Hot />
      <Place />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
