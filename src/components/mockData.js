const mockData = [
  {
    id: 0,
    name: "Spring web",
    description:
      "Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.",
    xml: "<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-web</artifactId> </dependency>",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-web'",
  },
  {
    id: 1,
    name: "Spring Boot DevTools",
    description:
      "Provides fast application restarts, LiveReload, and configurations for an enhanced development experience.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter</artifactId>\n</dependency>",
    implementation: "developmentOnly 'org.springframework.boot:spring-boot-devtools'",
  },
  {
    id: 2,
    name: "Lombok",
    description:
      "Java annotation library that helps to reduce boilerplate code.",
    xml: "<dependency>\n  <groupId>org.projectlombok</groupId>\n  <artifactId>lombok</artifactId>\n <optional>true</optional>\n",
    implementation: "  compileOnly 'org.projectlombok:lombok'",
  },
  {
    id: 3,
    name: "Spring Reactive Web",
    description:
      "Build reactive web applications with Spring WebFlux and Netty.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-webflux</artifactId>\n</dependency>",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-activemq",
  },
  {
    id: 4,
    name: "Spring for GraphQL",
    description:
      "Build GraphQL applications with Spring for GraphQL and GraphQL Java.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-graphql</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-graphql",
  },
  {
    id: 5,
    name: "Spring Web Services",
    description:
      "Facilitates contract-first SOAP development. Allows for the creation of flexible web services using one of the many ways to manipulate XML payloads.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web-services</artifactId>\n</dependency>",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-web-services'",
  },
  {
    id: 6,
    name: "Thymeleaf",
    description:
      "A modern server-side Java template engine for both web and standalone environments. Allows HTML to be correctly displayed in browsers and as static prototypes.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-thymeleaf</artifactId>\n</dependency>",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'",
  },
  {
    id: 7,
    name: "OAuth2 Client",
    description:
      "Spring Boot integration for Spring Security's OAuth2/OpenID Connect client features.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-oauth2-client</artifactId>\n</dependency>",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-oauth2-client'",
  },
  {
    id: 8,
    name: "OAuth2 Authorization Server",
    description: "Spring Boot integration for Spring Authorization Server.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-oauth2-authorization-server</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-oauth2-authorization-server'",
  },
  {
    id: 9,
    name: "OAuth2 Resource Server",
    description:
      "Spring Boot integration for Spring Security's OAuth2 resource server features.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'",
  },
  {
    id: 10,
    name: "Spring LDAP",
    description:
      "Makes it easier to build Spring based applications that use the Lightweight Directory Access Protocol.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-ldap</artifactId>\n</dependency>",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-data-ldap'",
  },
  {
    id: 11,
    name: "JDBC API",
    description:
      "Database Connectivity API that defines how a client may connect and query a database.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>",
    implementation: "org.springframework.boot:spring-boot-starter-data-jpa",
    
  },
  {
    id: 12,
    name: "Spring Data JPA",
    description:
      "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'",
  },
  {
    id: 13,
    name: "Spring Data JDBC",
    description:
      "Persist data in SQL stores with plain JDBC using Spring Data.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-jdbc</artifactId>\n</dependency>",
    implementation: "  implementation 'org.springframework.boot:spring-boot-starter-jdbc'",
  },
  {
    id: 14,
    name: "Spring Data R2DBC",
    description:
      "Provides Reactive Relational Database Connectivity to persist data in SQL stores using Spring Data in reactive applications.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-r2dbc</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-r2dbc'",
  },
  {
    id: 15,
    name: "H2 Database",
    description:
      "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes as well as a browser-based console application.",
    xml: "<dependency>\n  <groupId>com.h2database</groupId>\n  <artifactId>h2</artifactId>\n</dependency>",
    implementation: "runtimeOnly 'com.h2database:h2'",
  },
  {
    id: 16,
    name: "MySQL Driver",
    description: "MySQL JDBC driver.",
    xml: "<dependency>\n  <groupId>mysql</groupId>\n  <artifactId>mysql-connector-java</artifactId>\n</dependency>",
    implementation: "mysql:mysql-connector-java",
  },
  {
    id: 17,
    name: "Spring Data MongoDB",
    description:
      "Store data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-mongodb</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-mongodb'",
  },
  {
    id: 18,
    name: "Spring Data Reactive MongoDB",
    description:
      "Provides asynchronous stream processing with non-blocking back pressure for MongoDB.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-mongodb-reactive' implementation 'org.springframework.boot:spring-boot-starter-data-mongodb-reactive'",
  },
  {
    id: 19,
    name: "Spring Data Elasticsearch (Access+Driver)",
    description:
      "A distributed, RESTful search and analytics engine with Spring Data Elasticsearch.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-elasticsearch</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-elasticsearch'",
  },
  {
    id: 20,
    name: "Spring Data for Apache Cassandra",
    description:
      "A free and open-source, distributed, NoSQL database management system that offers high-scalability and high-performance.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-cassandra</artifactId>\n</dependency>",
    implementation: "implementation 'org.springframework.boot:spring-boot-starter-data-cassandra'",
  },
  {
    id: 21,
    name: "Spring Data Neo4j",
    description:
      "An open-source NoSQL database that stores data structured as graphs consisting of nodes, connected by relationships.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-neo4j</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-data-neo4j'",
  },
  {
    id: 22,
    name: "Spring for Apache Kafka",
    description: "Publish, subscribe, store, and process streams of records.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-kafka</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.kafka:spring-kafka'",
  },
  {
    id: 23,
    name: "Spring for Apache Kafka Streams",
    description:
      "Building stream processing applications with Apache Kafka Streams.",
    xml: "<dependency>\n  <groupId>org.springframework.kafka</groupId>\n  <artifactId>spring-kafka</artifactId>\n</dependency>",
    implementation: " implementation 'org.apache.kafka:kafka-streams'",
  },
  {
    id: 24,
    name: "Spring for Apache ActiveMQ 5",
    description: "Spring JMS support with Apache ActiveMQ 'Classic'.",
    xml: "<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-activemq</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.boot:spring-boot-starter-activemq'",
  },
  {
    id: 25,
    name: "Prometheus",
    description:
      "Expose Micrometer metrics in Prometheus format, an in-memory dimensional time series database with a simple built-in UI, a custom query language, and math operations.",
    xml: "<dependency>\n  <groupId>io.micrometer</groupId>\n  <artifactId>micrometer-registry-prometheus</artifactId>\n</dependency>",
    implementation: "runtimeOnly 'io.micrometer:micrometer-registry-prometheus'",
  },
  {
    id: 26,
    name: "Eureka Server",
    description: "spring-cloud-netflix Eureka Server.",
    xml: "<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n</dependency>",
    implementation: "org.springframework.cloud:spring-cloud-starter-netflix-eureka-server",
  },
  {
    id: 27,
    name: "Apache Zookeeper Discovery",
    description: "Service discovery with Apache Zookeeper.",
    xml: "<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.cloud:spring-cloud-starter-zookeeper-discovery'",
  },
  {
    id: 28,
    name: "Gateway",
    description:
      "Provides a simple, yet effective way to route to APIs and provide cross-cutting concerns to them such as security, monitoring/metrics, and resiliency.",
    xml: "<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>",
    implementation: " implementation 'org.springframework.cloud:spring-cloud-starter-gateway'",
  },
  {
    id: 29,
    name: "OpenFeign",
    description:
      "Easily write code that is both a client and a server in Spring Cloud applications.",
    xml: "<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>",
    implementation: "  implementation 'org.springframework.cloud:spring-cloud-starter-openfeign'",
  },
  {
    id: 30,
    name: "Circuit Breaker",
    description: "Resilience4j circuit breaker with Spring Boot.",
    xml: "<dependency>\n  <groupId>io.github.resilience4j</groupId>\n  <artifactId>resilience4j-spring-boot2</artifactId>\n</dependency>",
    implementation: "implementation 'io.zipkin.reporter2:zipkin-reporter-brave'",
  },
 
];

// You can access each dependency's data using mockData[index]
export default mockData;
