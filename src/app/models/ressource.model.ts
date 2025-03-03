import { Professeur } from "./professeur.model";
import { FichierDepot } from "./fichierdepot.model";

export interface Ressource {
    id?: number; 
    nom: string;
    data?: Uint8Array; 
    professeurs?: Professeur[]; 
    professeurReferent: Professeur;
    fichierDepot?: FichierDepot; 
}
