exports.handler = async (event) => {
  try {
    // Ensure the expenseId is passed in the query string parameters
    const expenseId =
      event.queryStringParameters && event.queryStringParameters.expenseId

    if (!expenseId) {
      throw new Error('Expense ID not provided')
    }

    // Example: Delete the expense from the database (e.g., using DynamoDB)

    // Simulating a successful delete operation
    console.log(`Deleted expense with ID: ${expenseId}`)

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Expense deleted successfully!' }),
    }
  } catch (error) {
    console.error('Error deleting expense:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
