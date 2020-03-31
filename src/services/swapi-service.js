// Hint:
// Code wich works with network should be better put in separate class-service

export default class SwapiService {
  _apiBase = `https://swapi.co/api`;

  async getResources(url) {
    const resolve = await fetch(`${this._apiBase}${url}`);
    if (!resolve.ok)
      throw new Error(`Could not fetch ${url}, received ${resolve.status}`);
    const response = await resolve.json();
    return response;
  }
  // People
  async getAllPeople() {
    const res = await this.getResources(`/people/`);
    return res.results.map( this._transformPerson );
  }
  async getPerson(id) {
    const person = await this.getResources(`/people/${id}`);
    return this._transformPerson( person );
  }
  // Planets
  async getAllPlanets() {
    const res = await this.getResources(`/planets/`);
    return res.results.map( this._transformPlanet );
  }
  async getPlanet(id) {
    const planet = await this.getResources(`/planets/${id}`);
    return this._transformPlanet(planet);
  }
  // Starships
  async getAllStarships() {
    const res = await this.getResources(`/starships/`);
    return res.results.map( this._transformStarShip );
  }
  async getStarship(id) {
    const starShip = await this.getResources(`/starships/${id}`);
    return this._transformStarShip( starShip )
  }
  _extractId(elem) {
      const idRegExp = /\/([0-9]*)\/$/;
      return elem.url.match(idRegExp)[1];
  }
  _transformPlanet(planet) {
    
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }
  _transformStarShip( starShip ) {

    return {
      id: this._extractId(starShip),
      name: starShip.name,
      model: starShip.model,
      manufacturer: starShip.manufacturer,
      costInCredits: starShip.cost_in_credits,
      length: starShip.length,
      crew: starShip.crew,
      passengers: starShip.passengers,
      cargoCapacity: starShip.cargo_capacity,
    }
  }
  _transformPerson( person ) {
    return {
      id: this._extractId(person),
      name: person.name,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender,

    }
  }
}
