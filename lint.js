const content = fs.readFileSync("server.js", "utf8");
// Read the entire server.js file as text

if (content.includes("console.log('bad')")) {
// If server.js contains the text "console.log('bad')"
// then fail — this is a "bad practice" we're checking for
  process.exit(1);  // FAIL
}

process.exit(0);  // PASS