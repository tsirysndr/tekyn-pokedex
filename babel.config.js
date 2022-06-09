module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-env"],
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
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
  };
};
