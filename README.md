

# IQ.vote - Employee of the Month Voting System

IQ.vote is the official voting system for IQ.wiki, allowing employees to vote for their peers to determine the Employee of the Month. The system is built using Next.js and TypeScript, with a backend that calculates and displays the top-voted employees. This README provides an overview of the project structure and its key features.

## Features

- **Admin Panel**: Only designated admins can access the admin panel. Admins can whitelist users, allowing only whitelisted employees to participate in the voting.
  
- **User Registration**: Users can sign up but cannot vote until they are whitelisted by an admin.
  
- **Voting System**:
  - Each employee can cast 3 votes.
  - 1st vote = 5 points.
  - 2nd vote = 3 points.
  - 3rd vote = 2 points.
  - Users will select employees to vote for using dropdown menus on the frontend.

- **Vote Calculation**: The backend calculates the top 3 employees based on points from all votes submitted and displays the results in the admin panel.

- **Vote Submission**: Votes are submitted in real-time and counted immediately after submission.

## Tech Stack

- **Frontend**: Next.js with TypeScript.
- **Backend**: TBD.
  
## Project Structure

```bash
├── public          # Static assets
├── src
│   ├── components  # Reusable UI components
│   ├── pages       # Next.js pages for landing, voting, and admin panel
│   ├── styles      # CSS and styling
│   └── utils       # Utility functions
└── README.md       # This README file
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/EveripediaNetwork/iq-vote.git
cd iq-vote
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm run dev
```

4. Open `http://localhost:3000` to view the application in your browser.

## How to Use

1. **Admin Panel**: Only accessible to admins. Whitelist employees to allow them to vote.
2. **Voting**: Once whitelisted, employees can cast their votes for the Employee of the Month by selecting peers from the dropdown menus.
3. **Results**: Admins can view the top 3 employees based on accumulated points in the admin panel.

## Contributing

We welcome contributions! Please open a pull request or issue if you'd like to help improve the project.

## License

This project is licensed under the MIT License.
