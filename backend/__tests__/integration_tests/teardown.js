import  MemoryDatabaseServer from '../../src/lib/MemoryDatabaseServer';

module.exports = async () => {
    await MemoryDatabaseServer.stop();
}