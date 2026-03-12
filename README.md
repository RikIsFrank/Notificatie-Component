# FF! Notificatie Component

## Description

This project is a notification component built with the [Frank!Framework](https://frankframework.org/). It is designed to adhere to the [Common Ground](https://commonground.nl/) principles, ensuring that it can be easily integrated and used across various ZGW (Zaakgericht Werken) systems and applications.

## Prerequisites

- Java 11+
- Frank Runner (for running the application locally)
- Docker & Docker Compose (for containerized deployment)
- PostgreSQL 15 (for production) or H2 (for local development)

## Getting Started

### Local Development

First download the Frank!Runner from the [frank-runner GitHub](https://github.com/wearefrank/frank-runner) and place it next to this project.

```
├── frank-runner
│   ├── build.xml
│   └── other-files
└── Notificatie-Component
    ├── build.xml
    └── other-files
```

From the project root in the terminal run:

**Windows:**
```cmd
.\restart.bat
```

**Unix:**
```bash
./restart.sh
```

The application will be available at `http://localhost:8080`

### Docker Deployment

To run the application with PostgreSQL using Docker Compose:

```bash
docker-compose up
```

This will start:
- **Frank Application**: Available at `http://localhost:8080`
- **Frank Flow (UI)**: Available at `http://localhost:8090`
- **PostgreSQL Database**: Running on port 5432

## Support

No

## Links

- [WeAreFrank!](https://wearefrank.nl/)
- [Frank!Framework](https://frankframework.org/)
- [Frank!Runner](https://github.com/wearefrank/frank-runner)
- [Frank Manual](https://frank-manual.readthedocs.io)
- [Frank Docs](https://frankdoc.frankframework.org)
- [Common Ground](https://commonground.nl/)
- [VNG Realisatie - Common Ground](https://vng.nl/artikelen/common-ground)
- [VNG Realisatie - Notificaties API Standaarden](https://vng-realisatie.github.io/gemma-zaken/standaard/notificaties/redoc-1.0.1)
- [ZGW API Standaarden](https://www.zaakgerichtwerken.nl/)