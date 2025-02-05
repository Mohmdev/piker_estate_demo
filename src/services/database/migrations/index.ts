import * as migration_20250205_104808 from './20250205_104808';

export const migrations = [
  {
    up: migration_20250205_104808.up,
    down: migration_20250205_104808.down,
    name: '20250205_104808'
  },
];
