# README #

Quick code test for email deduplication, in JavaScript.

The actual function to deduplicate is in `dedupe.js` -- JavaScript's `Set` object deduplicates implicitly, so we just take the generated list of fake emails and turn them into a `Set`.

`dedupe-test.js` is there for convenience's sake, and can be run with `node dedupe-test.js`.

This repository depends on faker.js to generate fake emails.

See terminal output for running time:
```
breville-code-test on  main [?] via  v14.18.1
❯ time node dedupe-test.js
node dedupe-test.js  0.49s user 0.10s system 118% cpu 0.494 total

breville-code-test on  main [?] via  v14.18.1
❯ time node dedupe-test.js
node dedupe-test.js  0.50s user 0.10s system 117% cpu 0.506 total

breville-code-test on  main [?] via  v14.18.1
❯ time node dedupe-test.js
node dedupe-test.js  0.49s user 0.10s system 118% cpu 0.500 total

breville-code-test on  main [?] via  v14.18.1
❯ time node dedupe-test.js
node dedupe-test.js  0.50s user 0.10s system 117% cpu 0.507 total
```
