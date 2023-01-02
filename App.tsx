import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {DeckScreen} from './src/features';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DeckScreen />
    </QueryClientProvider>
  );
};

export default App;
