var fs = require('fs');

var commitMsgFile = process.env.HUSKY_GIT_PARAMS;
// var commitRegex = /^\s*JIRA-[0-9]+/;

try {
  var msg = fs.readFileSync(commitMsgFile, 'utf-8');
  if (msg.charAt(0) !== msg.charAt(0).toUpperCase()) {
    process.stderr.write(
      '\n\x1b[41m \x1b[37m The commit message is not proper \x1b[0m\n\n'
    );
    process.exit(1);
  }
  // if (!commitRegex.test(msg)) {
  //   process.stderr.write(
  //     '\n\x1b[41m \x1b[37m The commit message is not proper \x1b[0m\n\n'
  //   );
  //   process.exit(1);
  // }
} catch (e) {
  process.stderr.write(
    '\n\x1b[41m \x1b[37m Unable to get commit message \x1b[0m\n\n'
  );
  process.exit(1);
}
