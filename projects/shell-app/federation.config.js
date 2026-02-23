const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.json",
    mfe2: "http://localhost:4202/remoteEntry.json",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  skip: [
    "node:inspector",
    "node:worker_threads",
    "node:async_hooks",
    "node:fs",
    "node:path",
    "node:os",
    "node:crypto",
    "node:stream",
    "node:util",
    "node:events",
    "node:buffer",
    "node:http",
    "node:https",
    "node:net",
    "node:tls",
    "node:url",
    "node:zlib",

    // Build tools (should never be shared to browser)
    "@angular/build",
    "@angular-devkit/build-angular",
    "ng-packagr",
    "@angular/cli",
    "@angular-devkit/core",
    "@angular-devkit/architect",

    // RxJS sub-entries not needed in browser
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",

    // Inquirer (CLI tool, not for browser)
    "@inquirer/core",
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true,
  },
});
