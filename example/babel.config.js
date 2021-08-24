// Forked from https://github.com/GeekyAnts/NativeBase/tree/master/example

const path = require('path');
const pak = require('../package.json');

module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', 'src'),
          },
        },
      ],
    ],
  };
};
