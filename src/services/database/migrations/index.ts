import * as migration_20250223_083144 from './20250223_083144';

export const migrations = [
  {
    up: migration_20250223_083144.up,
    down: migration_20250223_083144.down,
    name: '20250223_083144'
  },
];
