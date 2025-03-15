const chatbot = {
    knowledge: {
    // normal words
      "hello": "Hi! How are you?",
      "how are you": "I'm good, thanks! How can I assist you?",
      "what is your name": "My name is ChatBot!",
      "good morning": "Good morning! Hope you're having a great day!",
      "good afternoon": "Good afternoon! How's your day going?",
      "good evening": "Good evening! Hope you're unwinding well!",
      "what is your name": "My name is ChatBot!",
      
    //   knowledge of owner
      "who made you": "I made Idrees ud din.A Software Engineer and social media influencer. " ,

    //   knowledge of Artificial intelligence
      "what is ai": "AI stands for Artificial Intelligence, which refers to the development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making.",
      "what is machine learning": "Machine learning is a subset of AI that involves training algorithms to learn from data and make predictions or decisions without being explicitly programmed.",
      "what is deep learning": "Deep learning is a subset of machine learning that involves using neural networks with multiple layers to learn complex patterns in data.",
      "what is natural language processing": "Natural Language Processing (NLP) is a subfield of AI that deals with the interaction between computers and humans in natural language.",
      "what is computer vision": "Computer vision is a field of study that enables computers to interpret and understand visual information from images and videos.",
      "who are you": "I'm an AI chatbot designed to assist and communicate with users!",
      "what do you do": "I can chat with you, answer questions, and provide information on a wide range of topics!",
      "what can you do": "I can chat with you, answer questions, and provide information on a wide range of topics!",
      
    //  normal questions
      "who is the prime minister of pakistan": "The prime minister of pakistan is Mian Muhammad Shahbaz sharif.",
      "what is the capital of pakistan": "The capital of pakistan is Islamabad",
      "how many provinces in pakistan": "In pakistan there are five provinces. KPK, Sindh, Punjab, Balochistan and Gilgit Baltistan.",
      "what is the capital of kpk": "The capital of kpk is Peshawar",


    //   default message
      "default": "Sorry, I didn't understand that. I know only three words hello, how are you, what is your name."   
    },
  
    processInput: function(input) {
      input = input.toLowerCase();
      for (const key in this.knowledge) {
        if (input.includes(key)) {
          return this.knowledge[key];
        }
      }
      return this.knowledge.default;
    },
  
    generateResponse: function(input) {
      const response = this.processInput(input);
      return response;
    }
  };
  
  const messageContainer = document.querySelector('.message-container');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  
  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage !== '') {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('message');
      chatMessage.textContent = userMessage;
      messageContainer.appendChild(chatMessage);
  
      const response = chatbot.generateResponse(userMessage);
      const chatResponse = document.createElement('div');
      chatResponse.classList.add('message');
      chatResponse.textContent = response;
      messageContainer.appendChild(chatResponse);
  
      userInput.value = '';
    }
  });