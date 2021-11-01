import { validator } from '@jsoncv/core'

const sampleLocation = './sample.json'
validator(sampleLocation)
    .then(() => {
        console.log('This is a valid JSON CV')
    })
    .catch(errors => {
        console.log('This is NOT a valid JSON CV. Issues:')
        console.log(errors)
    })
