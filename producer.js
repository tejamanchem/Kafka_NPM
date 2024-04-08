const kafkaResource = require("./kafka");

const kafka = kafkaResource();

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "YOUR TOPIC HERE", // Add your topic here to produce message for specified topic
    messages: [
      {
        value: `YOUR MESSAGE HERE `, // Add your message here to produce
      },
    ],
  });
};

run().catch(console.error);
