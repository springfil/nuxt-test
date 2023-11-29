import { useApi } from '~/composable/useApi';
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore("characters", () => {
    const api = useApi()
    const characters = ref([])
    const currentCharacter = ref({})

    async function getCharacters(){
        try {
            const response = await api.get("/character");
            characters.value = response.data.results;
          } catch (error) {
            characters.value = [];
            console.log(error);
          }
    }

    async function filterCharacters({ name , status }: {name: string, status: string}) {
        try {
            const params = new URLSearchParams();
            if (name) {
                params.append("name", name);
            }
            if (status) {
                params.append("status", status);
            }
        
            const response = await api.get(`/character/?${params.toString()}`);
            characters.value = response.data.results;
        } catch (error) {
            characters.value = [];
            console.log(error);
        }
    }
    
    async function getCurrentCharacter(characterID: number) {
        try {
            const response = await api.get(`/character/${characterID}`);
            currentCharacter.value = response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        characters,
        currentCharacter,
        getCharacters,
        filterCharacters,
        getCurrentCharacter,
      };
}, {persist: true});

