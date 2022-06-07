module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@Components": "./src/components",
            "@Hooks": "./src/hooks",
            "@Navigation": "./src/navigation",
            "@Screens": "./src/screens",
            "@Themes": "./src/themes",
          },
        },
      ],
    ],
  };
};
