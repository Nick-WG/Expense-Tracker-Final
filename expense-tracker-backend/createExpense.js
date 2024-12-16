exports.handler = async (event) => {
  try {
    // Ensure the body is passed in the event and parse it if it exists
    if (!event.body) {
      throw new Error('No body provided')
    }

    const body = JSON.parse(event.body) // Parse the incoming JSON body

    // Now you can use the body data (e.g., to create an expense)
    const expenseId = body.expenseId
    const amount = body.amount
    const description = body.description

    // Example: Save to a database, etc.
    // Here you could add the logic to save the expense (e.g., using DynamoDB)

    // Assuming successful operation, return a response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Expense created successfully!' }),
    }
  } catch (error) {
    console.error('Error saving expense:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
