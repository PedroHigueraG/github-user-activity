# GitHub User Activity CLI

A practice project from [Roadmap.sh](https://roadmap.sh/projects/github-user-activity)

A simple Node.js command-line tool to fetch and display GitHub user activity using the GitHub API.

## Features

- Fetch recent GitHub activity for any user
- Display various event types including:
  - Push events
  - Pull request events  
  - Repository creation
  - Repository stars
  - Issues
  - Issue comments
- Simple and clean command-line interface

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm or pnpm package manager

## Installation

### Option 1: Clone and Install Locally

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd github-user-activity
   ```

2. Install dependencies (if any are added in the future):
   ```bash
   pnpm install
   # or
   npm install
   ```

### Option 2: Install as Global Package

If you want to use this tool from anywhere on your system:

1. Install globally using pnpm:
   ```bash
   pnpm install -g .
   ```

2. Or using npm:
   ```bash
   npm install -g .
   ```

After global installation, you can use the `github-activity` command from anywhere.

## Usage

### Local Usage

Run the tool directly with Node.js:

```bash
node index.js <github-username>
```

Or using the npm script:

```bash
pnpm start <github-username>
# or
npm start <github-username>
```

### Global Usage (after global installation)

```bash
github-activity <github-username>
```

### Examples

```bash
# Fetch activity for user 'octocat'
node index.js octocat

# Or if installed globally
github-activity octocat
```

## Sample Output

```
• Pushed to repository octocat/Hello-World
• Starred repository microsoft/vscode
• Opened a pull request in repository facebook/react
• Created a new repository octocat/new-project
• Commented on an issue in repository nodejs/node
```

## API Usage

This tool uses the GitHub API endpoint:
- `https://api.github.com/users/{username}/events`

No authentication is required for public user activity, but GitHub API has rate limits for unauthenticated requests (60 requests per hour per IP).

## Error Handling

The tool handles common errors such as:
- Invalid username (user not found)
- Network connectivity issues
- GitHub API rate limiting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Author

Pedro Higuera

## Notes

- The tool displays the most recent public events for the specified user
- Private repository activities are not displayed unless you have appropriate access
- The GitHub API returns a maximum of 30 events per request