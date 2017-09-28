export function save(){
  return window.localStorage.setItem(key, JSON.stringify(value))
}

export function load(){
  return JSON.parse(window.localStorage.getItem(key))
}