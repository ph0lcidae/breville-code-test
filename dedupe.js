const faker = require('faker');

module.exports = {
  dedupe: (emails) => {
    let uniques = new Set(emails);
    return uniques;
  },

  generate: () => {
    arr = [];
    duplicates = [];
    for (i = 0; i < 5; i++) {
      duplicates.push(faker.internet.email());
    }

    for (i = 0; i < 100000; i++) {
      if (i % 2 == 0) {
        arr.push(duplicates[i%5]);
      } else {
        arr.push(faker.internet.email());
      }
    }
    return arr;
  }
}
