import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';

import PhrasesHome from './components/PhrasesHome';
import NewPhrase from './components/NewPhrase';
import SinglePhraseShow from './components/SinglePhraseShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PhrasesHome} /> 
    <Route path="phrases/new" component={NewPhrase} />
    <Route path="phrases/:id" component={SinglePhraseShow} />
  </Route>
); 
