import {useMutation, useQuery, useQueryClient} from 'react-query';

import api from './api';

export const useDecks = (options?: {enabled: boolean}) => {
  const queryClient = useQueryClient();

  return useQuery('decks', () => api.getDecks(), {
    enabled: options?.enabled,
    onSuccess: () => {
      // This will make useHand query fetch another hand.
      queryClient.invalidateQueries('hand');
    },
  });
};

export const useHand = (deckId: string, options?: {enabled: boolean}) =>
  useQuery('hand', () => api.getHand(deckId), {enabled: options?.enabled});

export const useReturnHand = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (deckId: string) => {
      return api.returnHand(deckId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('hand');
      },
    },
  );
};
