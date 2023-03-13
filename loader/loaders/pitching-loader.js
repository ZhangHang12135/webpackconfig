const pitchingLoader = function(content, map, meta) {
    console.log('--------- picth loader -------');
    return content;
}
module.exports = pitchingLoader;
module.exports.pitching = function (remainingRequest, precedingRequest, data) {
    console.log("do somethings");
  };