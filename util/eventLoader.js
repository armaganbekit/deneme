// Bu Altyapı Tamamen Bluefire Botuna Aittir.
const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};

// Bu Altyapı Tamamen Bluefire Botuna Aittir.