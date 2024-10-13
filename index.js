// Add your code here
function submitData(name, email) {
    // Construct the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    };
  
    // Perform the fetch request and return the promise
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(function (data) {
        // Append the new user id to the DOM
        const userIdElement = document.createElement('p');
        userIdElement.textContent = `New User ID: ${data.id}`;
        document.body.appendChild(userIdElement);
      })
      .catch(function (error) {
        // Handle errors and append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  