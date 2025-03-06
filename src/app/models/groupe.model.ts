import { Etudiant } from './etudiant.model';
import { Personne } from './personne.model';

export interface Groupe {
  id?: number;
  nom: string;
  personnes?: Personne[];
}
