const log = require('../index')

const demoObj = {
  num: 123,
  str: 'abc ',
  arr: [1, 2, 3],
  obj: {
    test: true,
  },
  regex: /[a-z]/,
  undef: undefined,
  null: null,
}

log.err('ERR', demoObj)
log.warn('WARN', demoObj, true)
log.info('INFO')
log.debug('DEBUG')
