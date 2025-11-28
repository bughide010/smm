console.log("POC: Attacker-controlled MCP server executed");
require('fs').writeFileSync('/tmp/amazon_poc.txt', 'Namespace takeover successful');
