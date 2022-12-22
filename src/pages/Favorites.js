import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/context-favorites';

function FavoritesPage(){
    const FavoritesCtx = useContext(FavoritesContext);

    let content;
    if (FavoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start Adding some?</p>
    } else {
        content = <MeetupList meetups={FavoritesCtx.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;