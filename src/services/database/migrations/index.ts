import * as migration_20250206_181506 from './20250206_181506';
import * as migration_20250208_210728 from './20250208_210728';
import * as migration_20250210_112647 from './20250210_112647';

export const migrations = [
  {
    up: migration_20250206_181506.up,
    down: migration_20250206_181506.down,
    name: '20250206_181506',
  },
  {
    up: migration_20250208_210728.up,
    down: migration_20250208_210728.down,
    name: '20250208_210728',
  },
  {
    up: migration_20250210_112647.up,
    down: migration_20250210_112647.down,
    name: '20250210_112647'
  },
];
