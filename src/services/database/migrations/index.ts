import * as migration_20250213_203137 from './20250213_203137';

export const migrations = [
  {
    up: migration_20250213_203137.up,
    down: migration_20250213_203137.down,
    name: '20250213_203137'
  },
];
