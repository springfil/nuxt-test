import { useApi } from '~/composable/useApi';
import { defineStore } from 'pinia';
import { getIdFromUrl } from '~/utils/getIdFromUrl';
import type {Episode, SingleEpisodeResponse} from '~/types/episodes'
import type { Character } from '~/types/character';

export const useEpisodesStore = defineStore("episodes", () => {
    const api = useApi()
    const currentEpisode = ref({}) as Ref<Episode>
    const currentEpisodeCharacter = ref<Array<Character>>([])

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
        try {
            const charactersId = currentEpisode.value.characters.map(
                (url: string) => {
                    return getIdFromUrl(url);
                }
            );
            const charactersData = await Promise.all(
                charactersId.map((id) => getCharacterData(id))
            );
            currentEpisodeCharacter.value = charactersData;
        } catch (error) {
            console.log(error);
        }
    }

    async function getCharacterData(id: string) {
        try {
            const response = await api.get(`/character/${id}`);
            const data = await response;
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        currentEpisode,
        currentEpisodeCharacter,
        getCurrentEpisode,
        getEpisodeCharacterId,
        getCharacterData,
    };
}, {persist: true});
