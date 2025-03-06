export interface FichierDepot {
    id?: number;
    nomFichier: string;
    fichierData: Uint8Array;
    dateDepot: string;

    personne: { id: number };
    groupe: { id: number };
    ressource: { id: number };
    saeId: number;
}
