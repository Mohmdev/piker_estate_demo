import * as migration_20250212_190917 from './20250212_190917';

export const migrations = [
  {
    up: migration_20250212_190917.up,
    down: migration_20250212_190917.down,
    name: '20250212_190917'
  },
];
