import { IEpisode , IAction , InitState} from './interfaces'


export const fetchEpisodes = async (dispatch :any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const response = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: response._embedded.episodes,
    });
  };

export const toggleFavAction = (state :InitState, dispatch :any , episode: IEpisode | any ): IAction => {
    const episodeInFavs = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    }
    if (episodeInFavs) {
      const episodeRemoved = state.favourites.filter(
        (favs: IEpisode) => favs.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE",
        payload: episodeRemoved,
      };
    } 
    return dispatch(dispatchObj)
  };