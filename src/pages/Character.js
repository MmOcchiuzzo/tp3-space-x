import  getData  from '/src/utils/getData.js';
import  getHash  from '/src/utils/getHash.js';

export const Character = async () => {
    const id = getHash();
    const launches = await getData();
    const character = launches.find(launch => launch.id === id);

    const view = `
        <div class="character-details">
            <img src="${character.links.patch.small}" alt="${character.name}" />
            <div class="card">
            <h2>${character.name}</h2>
            <p>Details: ${character.details || 'No details available'}</p>
            <p>Flight Number: ${character.flight_number}</p>
            <p>Launch Date: ${new Date(character.date_local).toLocaleString()}</p>
            <p>Failures: ${character.failures.length > 0 ? character.failures.map(f => `${f.reason}`).join(', ') : 'No failures'}</p>
        
            </div>
        </div>
    `;
    return view;
};
