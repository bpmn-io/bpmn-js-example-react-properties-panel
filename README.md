# React Properties Panel for bpmn-js

This project demonstrates how to create a custom properties panel embed in [bpmn-js](https://github.com/bpmn-io/bpmn-js) based on [React](https://reactjs.org/).

![Demo Screenshot](./resources/screenshot.png)

## About

Specifically, the example features adding a [custom properties panel](./src/properties-panel), built with [React](https://reactjs.org/). It shows how to create an own implementation of the properties panel besides the original [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel).


Within the properties panel, we feature

* Displaying and editing BPMN element properties
* Displaying and editing of [custom extensions](./app/moddle/custom.json)
* Implementing diagram actions such as changing an element's type


## Run the Example

```sh
npm install
npm start
```


## License

MIT
