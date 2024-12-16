exports.handler = async (event) => {
  try {
    // Ensure the expenseId is passed in the query string parameters
    const expenseId =
      event.queryStringParameters && event.queryStringParameters.expenseId

    if (!expenseId) {
      throw new Error('Expense ID not provided')
    }

    // Example: Fetch from a database, etc.
    // Here you would add the logic to get the expense from DynamoDB or another storage

    // Simulating a database response
    const expense = {
      expenseId: expenseId,
      amount: 100.0,
      description: 'Sample Expense',
    }

    // Return the expense data in the response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Expense retrieved successfully!',
        expense,
      }),
    }
  } catch (error) {
    console.error('Error retrieving expense:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
