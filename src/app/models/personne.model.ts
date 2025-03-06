export interface Personne {

    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    estProf: boolean;
    estAdmin?: number; 
    login: string;

}