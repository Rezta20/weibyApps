import React from "react";

import Title from "./homepage/title/Title";
import PicturePlayer from "./homepage/picturePlayer/PicturePlayer";
import Search from "./homepage/search/Search";
import Hot from "./homepage/hot/Hot";
import Info from "./homepage/info/Info";
import Footer from "./homepage/footer/Footer";
import ForMoreBar from "./homepage/hot/forMoreBar/ForMoreBar";

function App() {
  return (
    <div>
      <Title />
      <PicturePlayer />
      <Search />
      <Hot />
      <ForMoreBar />
      <Hot />
      <ForMoreBar />

      <Info />
      <Footer />
    </div>
  );
}

export default App;
