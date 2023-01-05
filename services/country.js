import { responseHandler } from "./responseHandler";

const API_URL = process.env.API_URL;

const ENDPOINTS = {
  all: "/all?fields=name,capital,population,flags",
  name: "/name",
};

const fetchCountries = () => fetch(`${API_URL}${ENDPOINTS.all}`);

const fetchCountry = (name) => fetch(`${API_URL}${ENDPOINTS.name}/${name}`);

export const getCountry = (name) => responseHandler(fetchCountry, name);

export const getCountries = () => responseHandler(fetchCountries);
