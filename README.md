# Retry Design Pattern

Allows to handle temporary faliurs in a application. When an application trying to communicate with an external API
or a Database system or other external service faliurs can be occure.

# Retry Strategies

1- Don't retry
Authentication faliurs with invalid credentials. No need to retry.

2- Retry immediately
Data packet currupted in a NW call. Better to retry right after immediately that curruption happens

3- Retry after delay
Downloading huge data file.
