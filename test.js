'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var regexp = require('./regexp')
var uuid = require('./')

/*!
 * fixtures.
 */

var valid = [
  'bfaa2768-ba8c-11e5-9912-ba0be0483c18',
  'd46309c2ba8c11e59912ba0be0483c18',
  'E8D6F4C2-BA8C-11E5-9912-BA0BE0483C18',
  'E8D6F4C2BA8C11E59912BA0BE0483C18',
  'bd2e3ee3-8908-4665-9b59-682587236654',
  'df7c8034-41e3-409a-a441-2e08ba65b827',
  '5a028adb-c082-4980-aab3-f3c16642281a',
  '6715da1d-212b-4aab-9b9e-117e3a10de19',
  '209a03b9-2d18-4ea1-ab11-c3d46e7f1725',
  'f1b2eddc-4d38-42b1-8232-137934b6821d',
  '874ed1b5-51e6-470f-8b29-b21ade28cb81',
  '13627f16-6b28-4a91-bdc0-15bd9387b9ed',
  '738442a4-00e6-43b6-b6d5-f9a8e8aa3528',
  'b27fbc79-1314-472c-b509-2feb9d0050f7',
  '6ea45d93-9d50-4668-9ccb-07ab78b14458',
  'f97f6df2-f94b-47a1-a2db-ea2802ef79d9',
  '019fad9a-fbae-4dd6-aba2-3d76bdcaed59',
  '66C6AF39CA474C2DA59FD37208670F4C',
  'a2cd3a82c07046ab946beb0e33d302bb'
]

var validWithNilOption = [
  '00000000-0000-0000-0000-000000000000',
  '00000000000000000000000000000000'
]

var invalidWithoutNil = [
  '00000000-0000-0000-0000-000000000000',
  '000000000000000000000000000000000000'
]

var alwaysInvalid = [
  '',
  'bd2e3ee3-8908-4665-1b59-682587236654',
  '5a028adb-c082-8980-aab3-f3c16642281a',
  '999999999999999999999999999999999999'
]

/*!
 * tests.
 */

test('instanceof RegExp', function (t) {
  t.assert(regexp.versioned instanceof RegExp, 'versioned')
  t.assert(regexp.nil instanceof RegExp, 'nil')
  t.end()
})

test('uuid().exec()', function (t) {
  var string = 'f13cac50-b9bc-4cb8-bb50-db7d13262785'
  var actual = uuid().exec(string)

  t.deepEqual(JSON.parse(JSON.stringify(actual)), [string], 'Captures string')
  t.equal(actual.index, 0, 'Starts at expected index')
  t.equal(actual.input, string, 'String matches input')
  t.end()
})

test('valid always', function (t) {
  valid.forEach(function (data) {
    t.assert(uuid().test(data), data)
  })

  validWithNilOption.forEach(function (data) {
    t.assert(uuid({ nil: true }).test(data), data)
  })

  t.end()
})

test('invalid without nil option', function (t) {
  invalidWithoutNil.forEach(function (data) {
    t.false(uuid().test(data), data)
  })

  t.end()
})

test('invalid always', function (t) {
  alwaysInvalid.forEach(function (data) {
    t.false(uuid().test(data), data)
  })

  alwaysInvalid.forEach(function (data) {
    t.false(uuid({ nil: true }).test(data), data)
  })

  t.end()
})

test('replace', function (t) {
  var subject = 'RE: 94b6f09d-1eff-4d11-8740-4b9f7acb16e8 Contact Us'
  var expected = 'RE:  Contact Us'
  t.equal(subject.replace(uuid(), ''), expected)
  t.end()
})

test('replace global', function (t) {
  var subject = 'RE: 94b6f09d-1eff-4d11-8740-4b9f7acb16e8 Contact Us [E8D6F4C2BA8C11E59912BA0BE0483C18]'
  var expected = 'RE:  Contact Us []'
  t.equal(subject.replace(uuid({ global: true }), ''), expected)
  t.end()
})
