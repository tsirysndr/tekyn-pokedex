import { useQuery } from "@apollo/client";
import { GET_EVOLUTIONCHAIN } from "@GraphQL/evolutionchain/queries";

export function useEvolutionchain(id) {
  const { loading, error, data } = useQuery(GET_EVOLUTIONCHAIN, {
    variables: { id },
  });
  return { evolutionChain: data, loading, error };
}
