# ncc-pkg-examples

Examples for [ncc](https://github.com/vercel/ncc) and [pkg](https://github.com/vercel/pkg). One example per branch.

## ncc

ncc compiles a Node.js app into a single file.

```sh
# test server.js file
$ npm run dev

> ncc-pkg-examples@1.0.0 dev
> node server.js

Server running at http://127.0.0.1:3000/
^C

# run ncc
$ npm run ncc

> ncc-pkg-examples@1.0.0 ncc
> ncc build server.js -o dist-ncc

ncc: Version 0.32.0
ncc: Compiling file index.js into CJS
2kB  dist-ncc/index.js
2kB  [657ms] - ncc 0.32.0

# test generated dist-ncc/index.js file
node dist-ncc/index.js
Server running at http://127.0.0.1:3000/
^C
```

## pkg

```sh
# run pkg against server.js file
$ npm run pkg

> ncc-pkg-examples@1.0.0 pkg
> pkg .

> pkg@5.4.1
> Fetching base Node.js binaries to PKG_CACHE_PATH
  fetched-v14.18.1-macos-x64          [====================] 100%

# test generated binary
$ ./dist-pkg/ncc-pkg-examples
Server running at http://127.0.0.1:3000/

# can also be run against ncc's output
$ npm run ncc
$ npx pkg dist-ncc/index.js -t node16-macos-x64 -o dist-pkg/server
```
