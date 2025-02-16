import * as migration_20250215_101100 from './20250215_101100';
import * as migration_20250216_043916 from './20250216_043916';

export const migrations = [
  {
    up: migration_20250215_101100.up,
    down: migration_20250215_101100.down,
    name: '20250215_101100',
  },
  {
    up: migration_20250216_043916.up,
    down: migration_20250216_043916.down,
    name: '20250216_043916'
  },
];
