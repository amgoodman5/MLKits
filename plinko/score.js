//store Each of the different observations that we make inside of our application
// Implement K nearest Neighbor
const outputs = []
const predictionValue = 300
const k = 3
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}
function runAnalysis() {
  const bucket = _.chain(outputs)
    .map(row => [distance(row[0]), row[3]])
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
    console.log("I predict that this will probably fall into bucket", bucket)
}
function distance (point) {
  return Math.abs(point - predictionValue)
}