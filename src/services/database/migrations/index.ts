import * as migration_20250228_182615 from './20250228_182615';
import * as migration_20250302_172028 from './20250302_172028';

export const migrations = [
  {
    up: migration_20250228_182615.up,
    down: migration_20250228_182615.down,
    name: '20250228_182615',
  },
  {
    up: migration_20250302_172028.up,
    down: migration_20250302_172028.down,
    name: '20250302_172028'
  },
];
