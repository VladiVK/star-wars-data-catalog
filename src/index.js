
// Code wich works with network
// should be better put in separate class-service
class SwapiService {
  
    _apiBase = `https://swapi.co/api`;

    async getResources(url) {
      const resolve = await fetch(`${this._apiBase}${url}` );
      if( !resolve.ok ) throw new Error(`Could not fetch ${url}, received ${resolve.status}`)
      const response = await resolve.json();
      return response;
    }
    // People
    async getAllPeople() {
      const res = await this.getResources(`/people/`);
      return res.results;
    }
    getPerson(id) {
      return this.getResources(`/people/${id}`)
    }
    // Planets
    async getAllPlanets() {
      const res = await this.getResources(`/planets/`);
      return res.results;
    }
    getPlanet(id) {
      return this.getResources(`/planets/${id}`);
    }
    // Starships
    async getAllStarships() {
      const res = await this.getResources(`/starships/`);
      return res.results;
    }
    getStarship(id) {
      return this.getResources(`/starships/${id}`);
    }
}

const swapi = new SwapiService();




