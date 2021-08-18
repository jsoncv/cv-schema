# Schema

[![GitHub Releases](https://badgen.net/github/tag/jsoncv/schema)](https://github.com/jsoncv/schema/releases)
[![NPM Release](https://badgen.net/npm/v/@jsoncv/schema)](https://www.npmjs.com/package/@jsoncv/schema)

JSON Schema for academic CV and resumes.

### Accessing the schema via package manager

Install the package via `npm`

```shell
npm install --save @jsoncv/schema
```

or `yarn`

```shell
yarn add @jsoncv/schema
```

Require the schema like

```js
import { schema } from '@jsoncv/schema'
```

### Accessing the Schema from URL

You can attach this schema's link to your JSON object with `$schema` key.
Many editors such as *VSCode* will resolve this and suggest valid keys and structure automatically.

```json
{
    "$schema": "https://raw.githubusercontent.com/jsoncv/schema/master/src/schema.json"
}
```

![VSCode Example](https://user-images.githubusercontent.com/28408190/129867433-98d91a47-f2ed-4332-a987-7283c3d663d3.png)

### Development

For developments environment:
- clone the repository,
- install the dependencies,
- and lunch the typescript compiler.

```shell
git clone https://github.com/jsoncv/schema.git
```

```shell
yarn install
```

```shell
yarn run serve
```

For validating the changes, update the example JSON CV (`sample.json`) and run

```shell
yarn run validate
```

### Bugs, Issues, and Suggestions

You can report your issues, suggestions, and possible bugs on [Github](https://github.com/jsoncv/schema/issues).
