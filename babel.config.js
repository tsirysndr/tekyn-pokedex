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
            "@Constants": "./src/constants",
            "@GraphQL": "./src/graphql",
            "@Hooks": "./src/hooks",
            "@Images": "./src/images",
            "@Navigation": "./src/navigation",
            "@Screens": "./src/screens",
            "@Themes": "./src/themes",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
        },
      ],
    ],
  };
};
