import * as migration_20250217_224412 from './20250217_224412';

export const migrations = [
  {
    up: migration_20250217_224412.up,
    down: migration_20250217_224412.down,
    name: '20250217_224412'
  },
];
