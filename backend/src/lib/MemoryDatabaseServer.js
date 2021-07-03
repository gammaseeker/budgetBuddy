import { MongoMemoryServer } from 'mongodb-memory-server';

class MemoryDatabaseServer {
  constructor() {
    this.mongod = new MongoMemoryServer({
      binary: {
        version: '4.0.3',
      },
      autoStart: false,
    });
  }

  start() {
    return this.mongod.start();
  }

  stop() {
    return this.mongod.stop();
  }

  getConnectionString() {
    return 'mongodb://127.0.0.1:27017/budgetbuddy';
  }
}

module.exports = new MemoryDatabaseServer();