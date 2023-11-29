import { useApi } from '~/composable/useApi';
import { defineStore } from 'pinia';

export const useEpisodesStore = defineStore("episodes", () => {
    const api = useApi()
    const currentEpisode = ref({})
    const currentEpisodeCharacter = ref([])

    const getIdFromUrl = (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1];
    }

    async function getCurrentEpisode(episodeID) {
        try {
            const response = await api.get(`/episode/${episodeID}`);
            const episode = await response.data;
            const data = await episode;
            currentEpisode.value = data;
            await getEpisodeCharacterId();
          } catch (error) {
            console.log(error);
          }
    }

    async function getEpisodeCharacterId() {
        const charactersId = currentEpisode.value.characters.map((url) => {
          return getIdFromUrl(url);
        });
        const charactersData = await Promise.all(
            charactersId.map((id) => getCharacterData(id))
        );
        currentEpisodeCharacter.value = charactersData;
    }

    async function getCharacterData(id) {
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
