import path from 'path';

export function getFixturesRootDirectory() {
  // eslint-disable-next-line unicorn/prefer-module
  return path.join(__dirname, '..', 'fixtures');
}
