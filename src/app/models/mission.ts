import { Frais } from './frais';

export class Mission {

    constructor(public id: number,
        public dateDebut?: Date,
        public dateFin?: Date,
        public villeDepart?: string,
        public villeArrivee?: string,
        public transport?: string,
        public statut?: string) { }
}

