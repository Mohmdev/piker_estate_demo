import * as migration_20250305_132256 from './20250305_132256';

export const migrations = [
  {
    up: migration_20250305_132256.up,
    down: migration_20250305_132256.down,
    name: '20250305_132256'
  },
];
