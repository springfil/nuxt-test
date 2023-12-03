import { useApi } from '~/composable/useApi';
import { defineStore } from 'pinia';
import type { Character, CharactersResponse, SingleCharacterResponse } from '~/types/character';

export const useCharacterStore = defineStore("characters", () => {
    const api = useApi()
    const characters = ref<Array<Character>>([])
    const currentCharacter = ref<Character>() 

    async function getCharacters(): Promise<void>{
        try {
            const response: CharactersResponse = await api.get("/character");
            characters.value = response.data.results;
          } catch (error) {
            characters.value = [];
            console.log(error);
          }
    }

    async function filterCharacters({ name , status }: {name: string, status: string}): Promise<void> {
        try {
            const params = new URLSearchParams();
            if (name) {
                params.append("name", name);
            }
            if (status) {
                params.append("status", status);
            }
        
            const response: CharactersResponse = await api.get(`/character/?${params.toString()}`);
            characters.value = response.data.results;
        } catch (error) {
            characters.value = [];
            console.log(error);
        }
    }
    
    async function getCurrentCharacter(characterID: number): Promise<void> {
        try {
            const response: SingleCharacterResponse = await api.get(`/character/${characterID}`);
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

