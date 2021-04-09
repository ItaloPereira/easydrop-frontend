module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix', 'prettier --write'],
  '*.{md,html,css}': 'prettier --write',
};
