import * as migration_20250203_111255 from './20250203_111255';

export const migrations = [
  {
    up: migration_20250203_111255.up,
    down: migration_20250203_111255.down,
    name: '20250203_111255'
  },
];
