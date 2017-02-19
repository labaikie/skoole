import { Map } from 'immutable'

let configuration = Map({
  API_ROOT: 'http://138.68.27.21/api'
});

export function setConfiguration(name, value) {
  configuration = configuration.set(name, value)
}

export function setAll(properties) {
  configuration = configuration.merge(properties)
}

export function unsetConfiguration(name) {
  configuration = configuration.delete(name)
}

export function getConfiguration(key) {
  if (!configuration.has(key)) {
    throw new Error('Undefined configuration key: ' + key)
  }

  return configuration.get(key)
}
