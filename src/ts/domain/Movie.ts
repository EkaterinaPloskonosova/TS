import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly nameEng: string,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly author: string,
        readonly time: string,
        readonly price: number,
    ) { }
}