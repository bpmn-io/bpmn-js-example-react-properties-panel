import Modeler from 'bpmn-js/lib/Modeler';

import PropertiesPanel from './properties-panel';

import customModdleExtension from './moddle/custom.json';

import diagramXML from './diagram.bpmn';

const $modelerContainer = document.querySelector('#modeler-container');
const $propertiesContainer = document.querySelector('#properties-container');

const modeler = new Modeler({
  container: $modelerContainer,
  moddleExtensions: {
    custom: customModdleExtension
  }
});

const propertiesPanel = new PropertiesPanel({
  container: $propertiesContainer,
  modeler
});

modeler.importXML(diagramXML);