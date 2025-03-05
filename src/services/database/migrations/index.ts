import * as migration_20250305_141125 from './20250305_141125';

export const migrations = [
  {
    up: migration_20250305_141125.up,
    down: migration_20250305_141125.down,
    name: '20250305_141125'
  },
];
