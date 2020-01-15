# micro frontend demo

## run main app
`cd mainapp && yarn serve`

## run subapp1
`cd subapp1`

`yarn build`

`cd dist`

`http-server --cors -p 8081`

## run subapp2
`cd subapp2`

`yarn build`

`cd dist`

`http-server --cors -p 8082`

## preview
http://localhost:8080
