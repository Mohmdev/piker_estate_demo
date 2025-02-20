import * as migration_20250220_095326 from './20250220_095326';

export const migrations = [
  {
    up: migration_20250220_095326.up,
    down: migration_20250220_095326.down,
    name: '20250220_095326'
  },
];
