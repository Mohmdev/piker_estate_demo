import * as migration_20250304_170538 from './20250304_170538';

export const migrations = [
  {
    up: migration_20250304_170538.up,
    down: migration_20250304_170538.down,
    name: '20250304_170538'
  },
];
