const queryString = require('query-string');

export default function getParams(search){
  return queryString.parse(search)
}