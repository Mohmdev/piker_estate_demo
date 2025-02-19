import * as migration_20250219_111809 from './20250219_111809';

export const migrations = [
  {
    up: migration_20250219_111809.up,
    down: migration_20250219_111809.down,
    name: '20250219_111809'
  },
];
