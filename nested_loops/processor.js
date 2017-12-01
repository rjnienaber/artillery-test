var parseMasterManifest = (requestParams, response, context, ee, next) => {
  const body = JSON.parse(response.body)
  context.vars.variantplaylists = body[0].variants;
  return next();
};

var parseVariantManifest = (requestParams, response, context, ee, next) => {
  const body = JSON.parse(response.body)
  context.vars.segments = body.segments;
  return next();
};

module.exports = {
  parseMasterManifest: parseMasterManifest,
  parseVariantManifest: parseVariantManifest,
};