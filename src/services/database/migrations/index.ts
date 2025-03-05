import * as migration_20250305_101110 from './20250305_101110';

export const migrations = [
  {
    up: migration_20250305_101110.up,
    down: migration_20250305_101110.down,
    name: '20250305_101110'
  },
];
