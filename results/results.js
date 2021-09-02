import { getPokedex } from '../utils/pokedex-mgmt.js';
import pokemonList from '../data/data.js';

const pokedex = getPokedex();


const encounterChartEl = document.getElementById('encounter-chart');
const captureChartEl = document.getElementById('capture-chart');

const encounterIds = pokedex
    .filter(({ encountered }) => encountered > 0) 
    .map(({ id }) => id);

const encounterNames = encounterIds
    .map(mapId => pokemonList.find(listItem => listItem.id === mapId)) //find all pokemon in encountered ids array
    .map(({ pokemon }) => pokemon); // return each pokemon's name into an array

const encounterData = pokedex
    .filter(({ encountered }) => encountered > 0)
    .map(({ encountered }) => encountered);

const encounterChart = new Chart(encounterChartEl, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: encounterNames,
        datasets: [{
            label: 'encountered',
            data: encounterData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const captureIds = pokedex
    .filter(({ captured })=> captured > 0)
    .map(({ id }) => id);

const captureNames = captureIds
    .map(mapId => pokemonList.find(listItem => listItem.id === mapId))
    .map(({ pokemon }) => pokemon);

const captureData = pokedex
    .filter(({ captured }) => captured > 0)
    .map(({ captured }) => captured);

const captureChart = new Chart(captureChartEl, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: captureNames,
        datasets: [{
            label: 'captured',
            data: captureData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
