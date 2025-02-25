import { Etudiant } from './etudiant.model';

export interface Groupe {
  id?: number;
  nom: string;
  etudiants?: Etudiant[];
}
