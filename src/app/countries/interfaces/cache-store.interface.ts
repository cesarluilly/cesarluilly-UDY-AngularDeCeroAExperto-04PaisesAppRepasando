import { ICountry } from "./ICountry";
import { TypeRegion } from "./region.type";

export interface ICacheStore {
  byCapital     : ITermCountries;
  byCountries   : ITermCountries;
  byRegion: IRegionCountries;
}

export interface ITermCountries {
  term: string;
  countries: ICountry[];
}

export interface IRegionCountries {
  region: TypeRegion;
  countries: ICountry[];
}
