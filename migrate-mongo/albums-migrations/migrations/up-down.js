module.exports = {
    up(db, client) {
      // TODO escreva sua migração aqui. Retorne uma promessa (e/ou use async & await).
      // Veja https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
      // Exemplo:
      // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    },
  
    down(db, client) {
      // TODO escreve as instruções para reverter sua migração (se possível)
      // Exemplo:
      // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});