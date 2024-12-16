// Endpoint for the API (update with your API URL)
const apiUrl =
  'https://t9qssxxw6f.execute-api.us-west-2.amazonaws.com/prod/expenses'

// Get references to HTML elements
const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')

// Handle form submission to add a new expense
expenseForm.addEventListener('submit', async (e) => {
  e.preventDefault() // Prevent the form from refreshing the page

  const amount = document.getElementById('amount').value
  const description = document.getElementById('description').value

  // Check if amount and description are provided
  if (!amount || !description) {
    alert('Please fill in both fields.')
    return
  }

  // Create expense object
  const expense = {
    amount: parseFloat(amount),
    description: description,
  }

  try {
    // Make a POST request to the API to create an expense
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    })

    const result = await response.json()

    if (response.ok) {
      // Append the new expense to the list
      const li = document.createElement('li')
      li.textContent = `Amount: $${expense.amount} - ${expense.description}`
      expenseList.appendChild(li)
    } else {
      alert(`Error: ${result.message}`)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Error adding expense.')
  }

  // Reset the form
  expenseForm.reset()
})
