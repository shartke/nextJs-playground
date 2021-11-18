const { delay, ServiceBusClient, ServiceBusMessage } = require("@azure/service-bus");

// connection string to your Service Bus namespace
const connectionString = "Endpoint=sb://nexttesting.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=vY/yzrFEFoNbB5VqGAgjHq3Cng65AGxy4N5kU/Y5FiA="

// name of the queue
const queueName = "jsqueue"

 async function main() {
	// create a Service Bus client using the connection string to the Service Bus namespace
	const sbClient = new ServiceBusClient(connectionString);

	// createReceiver() can also be used to create a receiver for a subscription.
	const receiver = sbClient.createReceiver(queueName);

	// function to handle messages
	const myMessageHandler = async (messageReceived:any) => {
		console.log(`Received message: ${messageReceived.body.toString()}`);
	};

	// function to handle any errors
	const myErrorHandler = async (error:any) => {
		console.log(error);
	};

	// subscribe and specify the message and error handlers
	receiver.subscribe({
		processMessage: myMessageHandler,
		processError: myErrorHandler
	});

	// Waiting long enough before closing the sender to send messages
	await delay(20000);

	await receiver.close();	
	await sbClient.close();
}    


export default main