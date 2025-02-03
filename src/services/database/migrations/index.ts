import * as migration_20250129_120136 from './20250129_120136';
import * as migration_20250130_140530 from './20250130_140530';
import * as migration_20250131_085213 from './20250131_085213';
import * as migration_20250203_071338 from './20250203_071338';

export const migrations = [
  {
    up: migration_20250129_120136.up,
    down: migration_20250129_120136.down,
    name: '20250129_120136',
  },
  {
    up: migration_20250130_140530.up,
    down: migration_20250130_140530.down,
    name: '20250130_140530',
  },
  {
    up: migration_20250131_085213.up,
    down: migration_20250131_085213.down,
    name: '20250131_085213',
  },
  {
    up: migration_20250203_071338.up,
    down: migration_20250203_071338.down,
    name: '20250203_071338'
  },
];
