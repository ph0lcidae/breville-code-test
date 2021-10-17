const dedupe = require('./dedupe.js');

const dedupeEmails = function() {
  deduped = dedupe.dedupe(dedupe.generate());
}

dedupeEmails();
