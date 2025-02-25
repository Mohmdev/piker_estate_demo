import * as migration_20250225_073827 from './20250225_073827';

export const migrations = [
  {
    up: migration_20250225_073827.up,
    down: migration_20250225_073827.down,
    name: '20250225_073827'
  },
];
