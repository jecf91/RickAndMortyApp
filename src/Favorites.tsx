import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction } from "./Actions";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function Favorites() {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
      <React.Suspense fallback={<div>loading...</div>}>
        <div className="episodes-layout">
         { state.favourites.length ? ( <EpisodesList {...props} />) : 'Please select some episodes...' }
        </div>
      </React.Suspense>
  );
}
