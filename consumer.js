const kafkaResource = require("./kafka");
const kafka = kafkaResource()
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({
    topic: "YOUR TOPIC",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("This is the message", {
        partition,
        topic,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
