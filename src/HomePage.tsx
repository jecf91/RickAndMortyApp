import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchEpisodes , toggleFavAction } from './Actions'

//import component with lazy
const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchEpisodes(dispatch);
  });


  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state , dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layouts">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
