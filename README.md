# Project ReadMe

Welcome to our Git repository! This document provides an overview of our branching strategy, issue-driven development process, project management via GitHub Projects, and our milestone breakdown.

## Branching Strategy

Our project employs a specific branching strategy to organize and manage the development process efficiently:

- **`main`**: This branch is reserved for completed and released versions of the project. It represents the stable production build.
- **`develop`**: This branch serves as the integration point for both the client and server sides of the project. All features are merged here before being considered for release.
- **`feature/client`**: This branch is dedicated to aggregating all front-end development work. It acts as a collective branch for all front-end features.
- **`feature/server`**: Similarly, this branch is the aggregation point for all back-end development efforts. It contains the cumulative back-end features.
- **`feature/docs`**: This branch is used for sharing and collaborating on project documentation.

## Issue-Driven Development

Our development process is guided by issues to ensure organization and focus. Here's how we manage it:

- **GitHub Project Management**: We utilize GitHub Projects to track and manage our project's progress. Issues are created to represent tasks, bugs, or features.
- **Milestones**: The project is divided into 5 main milestones, each with specific goals and tasks outlined.
- **Daily Issue Preparation**: Each day, issues that will be addressed are prepared and moved to the "Ready to Pick" column in our GitHub Project. Team members can then pick up issues they will work on.
- **Issue Handling**: Each issue, representing a feature or a bug, is addressed in a dedicated branch linked to the issue. When a team member picks an issue, the corresponding project card moves to "In Progress".
- **Concurrent Issues**: To maintain focus and efficiency, we limit the number of issues in progress to three at any given time.
- **Pull Requests and Issue Closure**: Once an issue is resolved and tested, a pull request is created to merge the changes back into the parent branch. Merging a pull request will automatically close the associated issue and update the project board.

## Milestones

Our project is structured around 5 key milestones. Each milestone represents a significant phase or set of features in the project lifecycle.


## Contributing

To contribute:

1. Check the "Ready to Pick" column in our GitHub Project for available issues.
2. Assign an issue to yourself and move it to "In Progress".
3. Create a branch from the appropriate feature branch for your issue.
4. Once completed and tested, submit a pull request back to the parent feature branch.
5. Ensure your pull request passes all checks and receives approval before merging.
