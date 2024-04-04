### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT stands for JSON Web Token and is a compact, URL-safe means of representing a claim between two parties. A claims in a JWT are encoded as a JSON object that is used as the payload of a JWS (JSON Web Signature) or a JWE (JSON Web Encryption) structure.
  Ultimately, JWTs are useful tools for providing authentication logic in compact packages that can be used by middleware in web frameworks like Express.

- What is the signature portion of the JWT?  What does it do?

  The signature portion of a JWT is an encoded value that confirms that the sender of the JWT is an authenticated source.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Since JWTs are by default encoded but not encoded, they can be easily reversed using the encoding pattern like base 64. Which is why it is smart not to include sensitive data or structures that may allow attackers to make more harmful requests to an application.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  JWT-based authentication provides a stateless mechanism for authenticating users, enabling secure and efficient communication between clients and servers in distributed systems. It offers advantages such as scalability, simplicity, and the ability to delegate authentication to other services (such as OAuth 2.0 providers). However, it's essential to implement proper security measures, such as protecting against token theft, securely storing sensitive information in the token, and regularly rotating keys, to mitigate potential security risks.

  You can set up JWT-based authentication by first using your server logic to verify that the registration or log in data is valid, than use the hased data to create a JWT that will be stored and used throughout the application.

- Compare and contrast unit, integration and end-to-end tests.

  The similarities of unit, integration and end-to-end tests is that they all are testing a specific scale of the applicaiton's functionality. Further, there are some some shared technologies that can be used or interacted with such as Jest or any other CI/CD libraries.

  A Unit Test is unique because it tests a very small scope. They are used at a level that tests singular functions, such as a Class's methods.

  An Integrated Test is unique because it tests a larger scale of functionality than unit test but less than end to end testing. They are used to test multiple functions coming together to create one larger functionality. For example, when constructing route logic you often have functions that handle queries to a database, authenticate, or handle errors. An integration test would set up a suite that makes sure that the various functionalities are working together in the expected way.

  Finally, an end-to-end test is unique because it is testing on a very large scale. The tests aims are to mimic a user's experience and find potential breaking points. These types of test often need to be updated regularly because one change could lead to a complete failure of the testing suite. Further they are often reliant on technologies that can mimic browser interactions, technologies like selenium.

- What is a mock? What are some things you would mock?

  A mock is a simulated object that mimics the behaviors and characteristics of a real object in an application. They are useful to isolate the code being tested from the external dependencies, such as databases, network services, or complex objects.

- What is continuous integration?

  Continuous Integration is a development practice where developers are frequently pushing changes to an application instead of stockpiling changes that will be push in large update packages. To mitigate poor code from being pushed they use automated testing technologies that will prevent code from being pushed unless all of the tests pass.

- What is an environment variable and what are they used for?

  Enviornment Variables are dynamic-named variables that affect an application's behavior and are grouped together in unqiue enviornments. For example enviornment variables can be useful when testing, if there is a enviornmental variable set to test, development, or production than you can provide unique configuration logic for each of those settings to run with, such as DATABASE_URIs, SECRET_KEYS, and app clients.

- What is TDD? What are some benefits and drawbacks?

  TDD stands for Test Driven Development. It is a software engineering practice where developers craft the testing files before constructing the actual application logic. This approach leads to strong comprehension in the initial designing period of an application because a developer must know what the general structure, outputs, inputs, and errors of a function before developing it. Due to all of the initial work at the start of the project it can be more time consuming and be slower than jumping straight into the project's actual coding phase.

- What is the value of using JSONSchema for validation?

  JSONschema enables automatic validation of JSON data against predefined rules and constraints. This helps prevent invalid data from being accepted in an application, identify errors, or catch missing data. Ultimately it helps catch issues early in the development process, making it easier for developers to understand and work with data.

- What are some ways to decide which code to test?

  There are some certain criteria that developer's should follow when determining which aspects of an application to code. Is the functionality pertaining to any of these things:
    1. Secure Data
    2. Regression Areas (functionality prone to regression errors if one area changes it breaks elsewhere)
    3. Integration Points (functionality that use multiple functionalities such as API, Database, and Dependency interactions)
    4. Edge Cases
    5. (If in production) User Reported Problem Areas

  Ultimately, testing is a very powerful tool for developers and playing it safe by providing extra testing does not hurt.

- What does `RETURNING` do in SQL? When would you use it?

  In SQL, the RETURNING clause is used in conjunction with other DML (Data Manipulation Language), such as INSERT, UPDATE, or DELETE, to retrieve the values of columns affect by the change. It is a useful tool in situations where you want to have accesss to the manipulated data's values without having to make additional queries to the database.

- What are some differences between Web Sockets and HTTP?

  HTTP follows a request-response model, where a client sends a request to a server, the server replies with a single response.
  Web Sockets follow a full-duplex communication, allowing both client and server to send messages to each other simultaneously.
  HTTP is well-suited for traditional client-server interactions, while WebSockets excel in real-time, bidirectional communication scenarios where low-latency and high-performance are critical requirements.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  This is a hard question for me because I ultimately felt like I learned more about complex application development with Express and would have an easier time creating larger applications with it. But, Python has always made more sense to me than JavaScript, so the fact that Flask uses Python makes me prefer it a little more. Really wish python had a installation framework as useful as Node.
