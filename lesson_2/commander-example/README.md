1. const {program} = require('commander')
2. program.option("-a, --action, <type>")
3. program.parse()
4. const options = program.opts() - {action: 'type'} (obj)
5. 