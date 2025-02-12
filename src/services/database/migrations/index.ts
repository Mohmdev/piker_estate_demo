import * as migration_20250212_103612 from './20250212_103612';

export const migrations = [
  {
    up: migration_20250212_103612.up,
    down: migration_20250212_103612.down,
    name: '20250212_103612'
  },
];
