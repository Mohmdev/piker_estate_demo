import * as migration_20250215_101100 from './20250215_101100';

export const migrations = [
  {
    up: migration_20250215_101100.up,
    down: migration_20250215_101100.down,
    name: '20250215_101100'
  },
];
