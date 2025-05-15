const handleResponse = (response) => {
    if (response) {
      console.log('Response:', response);
    }
  };
  
  const createContent = ({
    sessionId = '',
    userId = '',
    token = '',
    interaction = null
  }) => ({  // Ok işareti kullanımına bak!
    sessionId,
    userId,
    token,
    interaction
  });
  
  const createResponse = ({ content = null, message = '', responseCode = 0 }) => ({
    content,
    message,
    responseCode
  });
  
  const getUserFromContent = (content) => ({
    id: content.userId,
    token: content.token,
    googleClientId: ''
  });
  