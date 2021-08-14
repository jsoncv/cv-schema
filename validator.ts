import Ajv from 'ajv'
import schema from './schema.json'
import sample from './sample.json'

const ajv = new Ajv()
const validate = ajv.compile(schema)
const valid = validate(sample)

if (!valid) console.log(validate.errors)
