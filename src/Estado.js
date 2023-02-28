import { writable } from "svelte/store";

export let estado = writable("menu");

export function trocarestadodojogo(novoestado){
    estado.set(novoestado)
}