import * as migration_20250228_182615 from './20250228_182615';
import * as migration_20250302_172028 from './20250302_172028';
import * as migration_20250304_123058 from './20250304_123058';

export const migrations = [
  {
    up: migration_20250228_182615.up,
    down: migration_20250228_182615.down,
    name: '20250228_182615',
  },
  {
    up: migration_20250302_172028.up,
    down: migration_20250302_172028.down,
    name: '20250302_172028',
  },
  {
    up: migration_20250304_123058.up,
    down: migration_20250304_123058.down,
    name: '20250304_123058'
  },
];
