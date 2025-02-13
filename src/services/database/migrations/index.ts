import * as migration_20250213_101232 from './20250213_101232';

export const migrations = [
  {
    up: migration_20250213_101232.up,
    down: migration_20250213_101232.down,
    name: '20250213_101232'
  },
];
