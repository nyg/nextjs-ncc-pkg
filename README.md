# ncc-pkg-examples

Examples for [ncc](https://github.com/vercel/ncc) and [pkg](https://github.com/yao-pkg/pkg). One example per branch.

## ncc

ncc compiles a Node.js app into a single file.

```sh
# test the server.js file
$ pnpm dev

> ncc-pkg-examples@1.0.0 dev
> node server.js

Server running at http://127.0.0.1:3000/
^C

# run ncc to build the standalone index.js file
$ pnpm ncc

> ncc-pkg-examples@1.0.0 ncc
> ncc build server.js -o dist-ncc

ncc: Version 0.38.1
ncc: Compiling file index.js into CJS
2kB  dist-ncc/index.js
2kB  [623ms] - ncc 0.38.1

# test the generated dist-ncc/index.js file
$ node dist-ncc/index.js
Server running at http://127.0.0.1:3000/
^C
```

## pkg

pkg packages a Node.js app into a single binary that can be run without having to install Node.js.

```sh
# run pkg to package the server.js file
$ pnpm run pkg

> ncc-pkg-examples@1.0.0 pkg
> pkg .

> pkg@5.11.5
(node:48205) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
> Fetching base Node.js binaries to PKG_CACHE_PATH
  fetched-v20.11.1-macos-x64          [====================] 100%

# test the generated binary
$ ./dist-pkg/ncc-pkg-examples
Server running at http://127.0.0.1:3000/
^C

$ file dist-pkg/ncc-pkg-examples
dist-pkg/ncc-pkg-examples: Mach-O 64-bit executable x86_64

# can also be run against ncc's output
$ pnpm exec pkg dist-ncc/index.js -t latest-macos-x64 -o dist-pkg/server
```
