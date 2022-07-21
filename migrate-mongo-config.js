// In this file you can configure migrate-mongo



module.exports = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    //url: "mongodb://admin:admin@localhost",
    //url: "mongodb://localhost:27017",
    //url: "mongodb://"+process.env.MONGODB_USER+":"+process.env.MONGODB_PASS+"@"+process.env.:27017/database_teste?authSource=admin",
    url: "mongodb+srv://"+process.env.MONGODB_USER+":"+process.env.MONGODB_PASS+"@"+process.env.MONGODB_HOST+"/"+process.env.MONGODB_DATABASE


    // TODO Change this to your database name:
    //databaseName: "YOURDATABASENAME",

    options: {
      useNewUrlParser: true // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir 
  migrationFileExtension: ".js",

  // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
  // if the file should be run.  Requires that scripts are coded to be run multiple times.
  useFileHash: false
};
