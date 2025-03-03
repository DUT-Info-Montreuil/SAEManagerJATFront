import { Ressource } from "./ressource.model";
import { FichierDepot } from "./fichierdepot.model";

export interface Sae {
    idSAE?: number;
    nom: string;
    anneeUniversitaire: string; 
    semestreUniversitaire: number;
    sujet: string;
    ressources?: Ressource[];
    fichiersDeposes?: FichierDepot[];
}
