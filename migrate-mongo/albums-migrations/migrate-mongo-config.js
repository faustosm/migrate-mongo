// In this file you can configure migrate-mongo

module.exports = {
    mongodb: {
      // TODO Altere (ou revise) a url para o seu MongoDB:
        url: "mongodb://localhost:27017",
  
      // TODO Altere para o nome do seu banco de dados:
        databaseName: "YOURDATABASENAME",
  
        options: {
        useNewUrlParser: true // remove um aviso de descontinuação ao conectar
        //   connectTimeoutMS: 3600000, // aumenta o tempo limite da conexão para 1 hora
        //   socketTimeoutMS: 3600000, // aumenta o tempo limite do soquete para 1 hora
        }
    },
  
    // O diretório de migrações pode ser um caminho relativo ou absoluto. Edite isso apenas quando realmente necessário.
    migrationsDir: "migrations",
  
    // A coleção mongodb onde as alterações aplicadas são armazenadas. Edite isso apenas quando realmente necessário.
    changelogCollectionName: "changelog",
  
    // A extensão do arquivo para criar migrações e procurar na migração dir 
    migrationFileExtension: ".js",
  
    // Habilita o algoritmo para criar uma soma de verificação do conteúdo do arquivo e usá-la na comparação para determinar
    // se o arquivo deve ser executado. Requer que os scripts sejam codificados para serem executados várias vezes.
    useFileHash: false
};