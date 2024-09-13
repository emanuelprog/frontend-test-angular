export interface Establishment {
    id: string;
    name: string;
    cnpj: string;
    address: string;
    phone: string;
    motorcycleSpots: number;
    carSpots: number;
}
  
export class Establishment implements Establishment {
    constructor(
        public id: string,
        public name: string,
        public cnpj: string,
        public address: string,
        public phone: string,
        public motorcycleSpots: number,
        public carSpots: number
    ) { }
}