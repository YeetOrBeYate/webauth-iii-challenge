// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/user.db3'
    },
    pool: { //this is to make sqlite behave like the big boys, meaning you can't add a foreiegn key when its reference doesnt exist. Always add it for now on
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },


  
};
