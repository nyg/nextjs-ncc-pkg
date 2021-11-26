# nextjs-ncc-pkg

* https://github.com/vercel/next.js

## ncc

* https://github.com/vercel/ncc

```sh
$ npm run ncc

> pkg-nextjs@1.0.0 ncc
> npx ncc build server.js

ncc: Version 0.32.0
ncc: Compiling file index.js into CJS
Error: Module parse failed: Unexpected token (171:43)
File was processed with these loaders:
 * ./node_modules/@vercel/ncc/dist/ncc/loaders/empty-loader.js
 * ./node_modules/@vercel/ncc/dist/ncc/loaders/relocate-loader.js
 * ./node_modules/@vercel/ncc/dist/ncc/loaders/shebang-loader.js
You may need an additional loader to handle the result of these loaders.
|                     entries[pageKey] = {
|                         bundlePath,
>                         __webpack_require__.ab + "_error.js",
|                         status: ADDED,
|                         lastActiveTime: Date.now(),
    at /Users/user/Documents/dev/js/nextjs-ncc-pkg/node_modules/@vercel/ncc/dist/ncc/index.js.cache.js:37:1896789
    at /Users/user/Documents/dev/js/nextjs-ncc-pkg/node_modules/@vercel/ncc/dist/ncc/index.js.cache.js:37:353322
    at _done (eval at create (/Users/user/Documents/dev/js/nextjs-ncc-pkg/node_modules/@vercel/ncc/dist/ncc/index.js.cache.js:20:117937), <anonymous>:9:1)
    at eval (eval at create (/Users/user/Documents/dev/js/nextjs-ncc-pkg/node_modules/@vercel/ncc/dist/ncc/index.js.cache.js:20:117937), <anonymous>:34:22)
```

## pkg

* https://github.com/vercel/pkg

```sh
$ npm run next
$ npm run pkg
$ ./dist-pkg/pkg-nextjs
(node:85263) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, scandir '/snapshot/nextjs-ncc-pkg/pages'
(node:85263) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:85263) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
