## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v16 or above)
- PostgreSQL (running locally or using a cloud service like [neon.tech](https://neon.tech))
- Docker

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MeerUzairWasHere/EZpay
   cd EZpay
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up PostgreSQL:**

   You can either set up PostgreSQL locally or use a cloud provider.

   **Using Docker to run PostgreSQL locally:**

   ```bash
   docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

4. **Environment Variables:**

   Copy `.env.example` files to `.env` and update them with your configuration.

   ```bash
   cp .env.example .env
   ```

   Make sure to update the database URLs in all `.env` files according to your PostgreSQL setup.

5. **Database Migration and Seeding:**

   Navigate to the `packages/db` directory:

   ```bash
   cd packages/db
   ```

   Run the following commands to apply migrations and seed the database:

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. **Run the Application:**

   Navigate to the `apps/user-app` directory and run the app:

   ```bash
   cd apps/user-app
   npm run dev
   ```

7. **Login to the Application:**

   Use the following credentials to log in:

   - **Phone:** `1111111111`
   - **Password:** `alice`

## Contributing

Feel free to open issues or pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
