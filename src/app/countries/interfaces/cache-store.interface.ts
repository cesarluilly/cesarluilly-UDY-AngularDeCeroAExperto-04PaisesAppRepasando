import { ICountry } from "./ICountry";
import { TypeRegion } from "./region.type";

export interface ICacheStore {
  byCapital     : ITermCountries;
  byCountries   : ITermCountries;
  byRegion: RegionCountries;
}

export interface ITermCountries {
  term: string;
  countries: ICountry[];
}

export interface RegionCountries {
  region: TypeRegion;
  countries: ICountry[];
}
