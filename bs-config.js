module.exports = {
  server : {
    middleware : { 
      2 : require('compression')(),
      1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
    }
  }
};