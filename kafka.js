const { Kafka } = require("kafkajs");

function getKafkaConnection() {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["YOUR KAFKA CONFIGURATIONS"], // Add your kafka configurations here
  });
  return kafka;
}

module.exports = getKafkaConnection;
