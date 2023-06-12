# Task Manager System

The Task Manager System is an advanced software solution designed to streamline task management and facilitate collaboration among teams. It offers a range of features to enhance productivity, track progress, and ensure efficient task allocation and completion. The system is built using cutting-edge technologies and follows best practices in software development, ensuring scalability, security, and ease of use.

The Task Manager System offers a range of key features that streamline task management and foster team collaboration. Users can create and assign tasks, set deadlines and priorities, and track progress in real-time through intuitive dashboards. The system also includes resource management capabilities for efficient allocation of team members and resources. Comprehensive reporting and analytics provide valuable insights, while integration and customization options ensure seamless integration with other tools and adaptability to specific needs. With robust security measures and access control, the system ensures data protection and a secure environment for task management.

By implementing the Task Manager System, organizations can enhance team collaboration, streamline task management processes, and boost overall productivity. Its user-friendly interface, extensive features, and scalability make it an ideal solution for teams of any size and complexity.

## Architecture

![Architecture](https://i.imgur.com/R6CvaNL.png)

## Dependencies

- [Docker](https://www.docker.com/) **(Required)** - Used for building, shipping, and running the microservices using containers. Docker-compose is used for scalability and container management.

### NPM Packages

#### Server

- [express](https://www.npmjs.com/package/express) - The web application framework used to create the backend and frontend servers and the routing for them.

- [socket.io](https://www.npmjs.com/package/socket.io) - The library used to establish the communication and data transfer capabilities between the frontend and backend applications.

#### Client

- [express](https://www.npmjs.com/package/express) - The web application framework used to create the backend and frontend servers and the routing for them.

- [socket.io](https://www.npmjs.com/package/socket.io) - The library used to establish the communication and data transfer capabilities between the frontend and backend applications.

## Installation Guide

To install the application, follow the instructions and run the appropriate file below based on your setup:

| Setup       | Command        |
|-------------|----------------|
| Docker + Linux    | `./docker-start.sh` |
| Docker + Windows  | `docker-start.bat` |

If you are using Docker, make sure Docker is installed and the daemon is running on your system before running the appropriate start file based on your operating system. The `docker-start.sh` and `docker-start.bat` scripts will build the Docker images and start the containers for you. If you rerun the start file it will first stop any existing containers and then rebuild and rerun the containers.

Once the application is started, you can access it by navigating to `http://localhost` in your web browser.
