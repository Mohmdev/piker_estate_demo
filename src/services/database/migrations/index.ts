import * as migration_20250225_073827 from './20250225_073827';
import * as migration_20250225_124419 from './20250225_124419';

export const migrations = [
  {
    up: migration_20250225_073827.up,
    down: migration_20250225_073827.down,
    name: '20250225_073827',
  },
  {
    up: migration_20250225_124419.up,
    down: migration_20250225_124419.down,
    name: '20250225_124419'
  },
];
