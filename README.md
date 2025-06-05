### Steps to Reproduce the Issue

1. Run the following command to start the Selenium standalone Chrome container:
    ```bash
    docker run -d -p 4444:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-chrome:134.0.6998.165-20250525
    ```
    **Note:** For Mac, add `--platform linux/x86_64`:
    ```bash
    docker run --platform linux/x86_64 -d -p 4444:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-chrome:134.0.6998.165-20250525
    ```

2. Execute the tests using CodeceptJS:
    ```bash
    npx codeceptjs run
    ```

### Note
- The issue occurs with `codeceptjs` version `3.7.3`.
- It works correctly with `codeceptjs` version `3.6.9`.
