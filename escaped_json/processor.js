function setJSONBody(requestParams, context, ee, next) {
  requestParams.json = { recipes: context.vars.recipes }
  next()
}

module.exports = {
  setJSONBody: setJSONBody,
};