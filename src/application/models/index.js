import { schema } from 'normalizr';

const driver = new schema.Entity('drivers', {}, {
    idAttribute: 'driverId'
});

const constructor = new schema.Entity('constructors', {}, {
    idAttribute: 'constructorId'
});

const standing = new schema.Entity('standings', {
    Driver: driver,
    Constructors: [ constructor ]
}, { 
    idAttribute: (val, parent, key) => `${val.position}-${parent.season}`
});

const raceResult = new schema.Entity('raceResults', {
    Driver: driver,
    Constructor: constructor
}, {
    idAttribute: (val, parent, key) => `${val.position}-${parent.raceName.replace(' ', '_')}`
})

const race = new schema.Entity('races', {
    Results: [ raceResult ]
}, {
    idAttribute: (val, parent, key) => `${val.season}_${val.raceName.replace(' ', '_')}`
});

const season = new schema.Entity('seasons', {
    DriverStandings: [ standing ],
    Races: [ race ]
}, { idAttribute: 'season' });

const StandingsList = new schema.Array(season);

const RaceTable = season;

export {
    driver, 
    constructor,   
    standing,
    season,
    raceResult,
    race,
    RaceTable,
    StandingsList
}