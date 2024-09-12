# Youtube Clone Website

This project is a YouTube clone, aiming to replicate the core functionalities of YouTube such as video search, video playback, and more, providing a similar user experience to YouTube's platform.

## Features

1. **Home Page:**
 Display a list of top videos.

2. **Navigation Panel:**
 Navigation links to different sections: Home, Shorts, Trending, etc.

3. **Search Bar:**
 Search for any video on YouTube through the RapidAPI Database and play it directly within the app.

4. **Responsive Design:**
 Ensure the website is responsive across different devices using breakpoints.

## Tech Stack

 **React:** 
 Frontend library used to build the user interface.

**Tailwind CSS:** 
 For styling the app with a focus on utility-first CSS, enabling rapid customization and responsive design.

**Axios:**
 For handling API requests, ensuring smooth interaction with the YouTube API via RapidAPI.

**RapidAPI:** 
 Used to fetch video data, search results, and other relevant YouTube statistics.

**HTML:**
 with flexbox/grid for layout

## Demo
[https://freyashingala.github.io/youtube-clone](https://freyashingala.github.io/youtube-clone/)

## Installation and Setup
  1. Clone the repository:
      ```
      git clone "https://github.com/freyashingala/youtube-clone" your_repo_name
      cd youtube-clone
      ```
  2. Install the necessary dependencies:
      ```
     npm install
      ```
  3. Create a `.env` file and add your RapidAPI key:
     ```
     REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
     ```
  4. Start the development server:
     ```
     npm start
     ```

## API Integration

The app uses the YouTube Data API through RapidAPI to fetch the following information:

- Video search results
- Video playback links
- Detailed video statistics (views, likes, subscribers, etc.)
- Related videos

## Usage

This project offers various features such as:

### 1. Search Videos: 
- Allows users to search for videos and display relevant results.

### 2. Video Playback: 
- Users can watch videos directly within the app.

### 3. Detailed Video Info: 
- Displays additional information such as View count, Like count, Number of subscribers, Related videos

### 4. Responsive Design: 
- The app is fully responsive, test it by using it across devices—desktops, tablets, and mobile.
