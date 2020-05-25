import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any) :Array<JSX.Element> {

  const { episodes, toggleFavAction, favourites , store } = props;
  const { state , dispatch } = store;

  return episodes &&
    episodes.map((episode: IEpisode) => {
      return (
        <div key={episode.id} className="episode-box">
          {episode.image !== null ? (
            <img src={episode.image.medium} alt={episode.name} />
          ) : (
            ""
          )}
          <h1>{episode.name}</h1>
          <section style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              Season: {episode.season} Episode: {episode.number}
            </div>
            <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
              {favourites.find((fav: any) => fav.id === episode.id)
                ? "UnFav"
                : "Fav"}
            </button>
          </section>
        </div>
      );
    });
}
