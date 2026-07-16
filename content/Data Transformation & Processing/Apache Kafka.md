Apache Kafka is a **distributed system** for **publishing, subscribing to, storing, and processing streams of records in real time**. It functions as a "high-throughput message broker", but with scalability, durability, and replay capabilities that traditional messaging systems lack.

> Kafka enables a fault-tolerant platform for building **real-time, event-driven pipelines** that handle millions of messages per second with minimal latency.

- **Pub/Sub Messaging**: Kafka acts as a publish-subscribe messaging system, enabling multiple producers and consumers to interact efficiently.
- **Distributed Architecture**: It runs on a cluster of servers, ensuring high availability, fault tolerance, and scalability.
- **High Throughput**: Optimized for handling large volumes of data with minimal latency.
- **Durable Storage**: Kafka stores streams of records durably, allowing consumers to replay messages as needed.
## # Kafka Architecture

| API | Description |
|------|-------------|
| **Producer API** | Publishes (writes) data streams to Kafka topics. Applications use this API to send messages to Kafka brokers. |
| **Consumer API** | Subscribes to (reads) data streams from Kafka topics. Applications use this API to process messages produced by Kafka producers. |
| **Streams API** | Processes data streams directly within Kafka. Enables applications to transform, aggregate, filter, and process streams of events in real time. |
| **Admin API** | Manages Kafka topics, brokers, and other administrative tasks. Used to programmatically create, delete, or configure topics, monitor brokers, and manage ACLs. |
| **Connector API** | Integrates Kafka with external systems using connectors. Part of Kafka Connect, this API simplifies moving data into and out of Kafka. |

![[Pasted image 20260717000907.png]]
## # Kafka Core Components

- **Producers** are client applications that publish records to Kafka topics. They decide which partition to send a message to, often based on a message key (for ordering).  
- **Consumers** subscribe to topics and process records. Kafka supports **consumer groups**, where each consumer in the group reads data from a unique subset of partitions, enabling load balancing and fault tolerance.

![[Pasted image 20260717001546.png]]

> Historically, Kafka used [**Apache ZooKeeper**](https://zookeeper.apache.org) to maintain cluster metadata, manage leadership elections, and coordinate brokers. However, the new **KRaft mode (Kafka Raft)** introduced in recent versions replaces ZooKeeper with an internal consensus mechanism, simplifying deployment and improving performance.
### # Topics, Partitions, Offsets, Brokers and Clusters
#### # Topic

A topic in Kafka is a log that stores messages and events in a logical order. We can equate a topic to a folder in a filesystem, and the events to the files.
#### # Partition

A partition is a "slice" of a topic. This means that when you create a topic, you need to specify the number of partitions you will need.

![[Pasted image 20260717002309.png]]

This is important since it allows more brokers to share the load, since the data is stored in separate partitions. This also allows consumers in the same group to read from different partitions at the same time. An example of a partition is as follows:  
Say you create a topic called orders with 3 partitions. This is what it will actually look like  

![[Pasted image 20260717002325.png]]
#### # Offsets

An offset is a unique identifier assigned to each message in a partition. This helps the producers, consumers, and brokers to determine the position of a message in a partition.

![[Pasted image 20260717002357.png]]
#### # Brokers and Clusters

A **broker** is a single Kafka server that stores topic partitions and serves client requests. Multiple brokers form a **Kafka cluster**, ensuring redundancy and horizontal scalability. A typical cluster may consist of three to ten or more brokers, depending on workload.

![[Pasted image 20260717001829.png]]
### # Further Reading
- [Apache Kafka Deep Dive: Core Concepts, Data Engineering Applications, and Real-World Production Practices](https://dev.to/fredmunjogu/apache-kafka-deep-dive-core-concepts-data-engineering-applications-and-real-world-production-549d)
- [Apache Kafka Deep Dive: Core Concepts, Data Engineering Applications, and Real-World Production Practices](https://medium.com/@petermari658/apache-kafka-deep-dive-core-concepts-data-engineering-applications-and-real-world-production-797c896adcab)