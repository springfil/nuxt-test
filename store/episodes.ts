import { useApi } from '~/composable/useApi';
import { defineStore } from 'pinia';
import type {Episode, SingleEpisodeResponse} from '~/types/episodes'
import type { Character } from '~/types/character';

export const useEpisodesStore = defineStore("episodes", () => {
    const api = useApi()
    const currentEpisode = ref({}) as Ref<Episode>
    const currentEpisodeCharacter = ref<Array<Character>>([])

    const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1];
    }

    async function getCurrentEpisode(episodeID: number): Promise<void> {
        try {
            const response: SingleEpisodeResponse = await api.get(`/episode/${episodeID}`);
            const episode = await response.data;
            const data = await episode;
            currentEpisode.value = data;
            await getEpisodeCharacterId();
          } catch (error) {
            console.log(error);
          }
    }

    async function getEpisodeCharacterId(): Promise<void> {
        const charactersId = currentEpisode.value.characters.map((url: string) => {
          return getIdFromUrl(url);
        });
        const charactersData = await Promise.all(
            charactersId.map((id) => getCharacterData(id))
        );
        currentEpisodeCharacter.value = charactersData;
    }

    async function getCharacterData(id: string) {
        const response = await api.get(`/character/${id}`);
        const data = await response;
        return data.data;
      }

    return {
        currentEpisode,
        currentEpisodeCharacter,
        getCurrentEpisode,
        getEpisodeCharacterId,
        getCharacterData,
    };
}, {persist: true});
