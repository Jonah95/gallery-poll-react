// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// mongoose.connect('mongodb+srv://jonah-admin:jonahrocks@gallerypoll.7i8aymp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// const UserData = mongoose.model('UserData', {
//   userName: String,
//   buttonClicks: Number,
//   title: String
// });

// app.use(bodyParser.json());

// // Use a specific origin for CORS
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };

// app.use(cors(corsOptions));

// // Add an OPTIONS route for preflight requests
// app.options('*', cors(corsOptions));

// app.post('/saveUserData', async (req, res) => {
//   try {
//     const { userName, buttonClicks, title } = req.body;

//     const userData = new UserData({
//       userName,
//       buttonClicks,
//       title
//     });

//     await userData.save();

//     // Set the 'Access-Control-Allow-Origin' header to the exact origin
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.status(200).json({ message: 'User data recorded successfully' });
//   } catch (error) {
//     console.error('Error saving user data:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://jonah:jonahrocks@cluster0.1c5uzxo.mongodb.net/userTest/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserData = mongoose.model('UserData', {
  userName: String,
  buttonClicks: Number,
  title: String,
  id: String,
});

app.use(bodyParser.json());

// Reusable function for CORS configuration
const configureCors = (origin) => ({
  origin,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
});

app.use(cors(configureCors('https://gallery-poll-react.vercel.app',)));
app.options('*', cors(configureCors('https://gallery-poll-react.vercel.app')));

app.post('/saveUserData', async (req, res) => {
  try {
    const { userName, buttonClicks, title, id } = req.body;

    const userData = new UserData({
      userName,
      buttonClicks,
      title,
      id,
    });

    await userData.save();

    res.status(200).json({ message: 'User data recorded successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
