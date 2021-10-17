# README #

Quick code test for email deduplication, in JavaScript.

The actual function to deduplicate is in dedupe.js -- JavaScript's Set object deduplicates implicitly, so we just take the generated list of fake emails and turn them into a Set.

dedupe-test.js is there for convenience's sake.

This repository depends on faker.js to generate fake emails.
