# TODO
A list of things to work on

## swagger rules

- if method returns array or promise array then the api response should have isArray:true or a type of [type]
- objects returned or in the body input should have attributes for swagger

## Nest.js rules

- all fields should have swagger decorator in all entity, dto classes
- dto class name should end with 'dto'
- column decorator of typeORM should not have 'name'. custom name is not allowed.

## Next.js rules

- pages should have no custom export which is not supported by Next.js

## React rules

