module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'docker123',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
