import * as migration_20250210_175202 from './20250210_175202';

export const migrations = [
  {
    up: migration_20250210_175202.up,
    down: migration_20250210_175202.down,
    name: '20250210_175202'
  },
];
