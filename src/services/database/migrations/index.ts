import * as migration_20250206_181506 from './20250206_181506';

export const migrations = [
  {
    up: migration_20250206_181506.up,
    down: migration_20250206_181506.down,
    name: '20250206_181506'
  },
];
