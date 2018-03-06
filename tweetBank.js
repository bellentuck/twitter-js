const _ = require('lodash');

const data = [];


  function add (name, content, userName) {
    data.push({ name: name, content: content, userName: userName });
  }

  function list () {
    return _.cloneDeep(data);
  }

  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }

  module.exports = { add: add, list: list, find: find };


  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };


  //////SEED DATA  ////---------------------------------------
  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };

  const getFakeUsername = function(usedUsernames) {
    const fakeUsernames = ['realDonaldTrump', 'plushPossum', 'undefined', 'nimit4000', 'edison', 'ben', 'joeThePlumber', 'twitterUser2018', 'russianBot', 'hillaryClinton'];
    let username = randArrayEl(fakeUsernames);
    while (usedUsernames.includes(username)) {
      username = randArrayEl(fakeUsernames);
    }
    usedUsernames.push(username);
    return {
      username,
      usedUsernames
    };
  };

  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };

  let usedUsernames = [];
  for (let i = 0; i < 10; i++) {
    let name = getFakeName();
    let userNameData = getFakeUsername(usedUsernames);
    usedUsernames = userNameData.usedUsernames;
    let username = userNameData.username;
    module.exports.add( name, getFakeTweet(), username );
  }

