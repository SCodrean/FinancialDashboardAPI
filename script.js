// Modify the getPrice function to accept a user input parameter and an action parameter
async function fetchData(action, userInput) {
    let url = '';
  
    // Determine the API endpoint based on the selected action
    switch (action) {
        case 'search':
            url = `https://yahoo-finance127.p.rapidapi.com/search/${userInput}`;
        break;
        case 'price':
            url = `https://yahoo-finance127.p.rapidapi.com/price/${userInput}`;
        break;
        case 'news':
            url = `https://yahoo-finance127.p.rapidapi.com/news/${userInput}`;
        break;
        case 'options':
            url = `https://yahoo-finance127.p.rapidapi.com/options/${userInput}`;
        break;
        case 'balance':
            url = `https://yahoo-finance127.p.rapidapi.com/balance-sheet/${userInput}`;
        break;
        case 'earnings':
            url = `https://yahoo-finance127.p.rapidapi.com/earnings/${userInput}`;
        break;
        case 'esg':
            url = `https://yahoo-finance127.p.rapidapi.com/esg-score/${userInput}`;
        break;
        case 'finance':
            url = `https://yahoo-finance127.p.rapidapi.com/finance-analytics/${userInput}`;
        break;
        case 'trend':
            url = `https://yahoo-finance127.p.rapidapi.com/earnings-trend/${userInput}`;
        break;
        case 'statistics':
            url = `https://yahoo-finance127.p.rapidapi.com/key-statistics/${userInput}`;
        break;
        case 'multi':
            url = `https://yahoo-finance127.p.rapidapi.com/multi-quote/${userInput}`;
        break;
        case 'historic':
            url = `https://yahoo-finance127.p.rapidapi.com/historic-data/${userInput}`;
        break;
    
    

      default:
        // Handle unsupported actions or provide a default action.
        break;
    }
  
    if (!url) {
      console.error('Invalid action selected');
      return;
    }
  
    const options = {
      method: 'GET',
      url,
      headers: {
        'X-RapidAPI-Key': '05c8b7d7f5mshba9ec763084f913p1bb322jsn88fe1108d124',
        'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  // Handle the form submission
  document.getElementById('user-input-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const action = document.getElementById('action').value; // Get the selected action
    const userInput = document.getElementById('user-input').value;
  
    try {
      const data = await fetchData(action, userInput); // Pass the action and user input to fetchData
      displayData(data); // Call a function to display the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  