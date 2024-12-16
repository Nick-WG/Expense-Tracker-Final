exports.handler = async (event) => {
  try {
    // Ensure the body is passed in the event and parse it if it exists
    if (!event.body) {
      throw new Error('No body provided')
    }

    const body = JSON.parse(event.body) // Parse the incoming JSON body

    // Ensure the expenseId is provided in the body for updating
    const expenseId = body.expenseId
    if (!expenseId) {
      throw new Error('Expense ID is required for update')
    }

    const amount = body.amount
    const description = body.description

    // Example: Update the expense in the database (e.g., using DynamoDB)

    // Simulating a successful update operation
    console.log(`Updated expense: ${expenseId}, ${amount}, ${description}`)

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Expense updated successfully!' }),
    }
  } catch (error) {
    console.error('Error updating expense:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
