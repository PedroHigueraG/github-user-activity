#!/usr/bin/env node
const args = process.argv.slice(2);

async function main() {

    if (args.length === 0 || args.length > 1){
        console.log("Please provide a only GitHub username.");
        return;
    }

    const username = args[0];
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const data = await response.json();

    if (response.status !== 200) {
        console.log(`Error fetching data for user ${username}: ${data.message}`);
        return;
    }else {
        data.forEach(event => {
            switch (event.type) {
                case "PushEvent":
                    console.log(`• Pushed to repository ${event.repo.name}`);
                    break;
                case "PullRequestEvent":
                    console.log(`• Opened a pull request in repository ${event.repo.name}`);
                    break;
                case "CreateEvent":
                    console.log(`• Created a new repository ${event.repo.name}`);
                    break;
                case "WatchEvent":
                    console.log(`• Starred repository ${event.repo.name}`);
                    break;
                case "IssuesEvent":
                    console.log(`• Opened an issue in repository ${event.repo.name}`);
                    break;
                case "IssueCommentEvent":
                    console.log(`• Commented on an issue in repository ${event.repo.name}`);
                    break;
                default:
                    break;
            }
        });
    }

}

main();