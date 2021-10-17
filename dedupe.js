const faker = require('faker');

module.exports = {
  dedupe: (emails) => {
    let uniques = new Set(emails);
    return uniques;
  },

  generate: () => {
    // creates a set of 5 fake emails to interleave as duplicates
    arr = [];
    duplicates = [];
    for (i = 0; i < 5; i++) {
      duplicates.push(faker.internet.email());
    }

    for (i = 0; i < 100000; i++) {
      if (i % 2 == 0) {
        // interleave generated duplicates every other entry
        arr.push(duplicates[i%5]);
      } else {
        arr.push(faker.internet.email());
      }
    }
    return arr;
  }
}
