import Ajv from 'ajv'
import schema from './index'
import sample from './sample.json'

const ajv = new Ajv()
const validate = ajv.compile(schema)
const valid = validate(sample)

if (!valid) console.log(validate.errors)
