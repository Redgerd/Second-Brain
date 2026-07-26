Apache Hadoop is an open source, **Java-based** software platform that manages data processing and storage for big data applications. The platform works by distributing Hadoop big data and analytics jobs across nodes in a computing cluster, breaking them down into smaller workloads that can be run in parallel. 

> Technically, Hadoop is not in itself a type of database such as SQL or RDBMS. Instead, the Hadoop framework gives users a processing solution to a wide range of database types.
### # History

Inspired by Google's [[MapReduce]], a programming model that divides an application into small fractions to run on different nodes, Doug Cutting and Mike Cafarella started Hadoop in 2002 while working on the Apache Nutch project. According to a New York Times article, Doug named Hadoop after his son's toy elephant.
### # Hadoop framework

The base Apache Hadoop framework is composed of the following modules:

- **Hadoop Common** - contains libraries and utilities needed by other Hadoop modules;
- **[[Hadoop Distributed File System (HDFS)]]** - a distributed file-system that stores data on commodity machines, providing very high aggregate bandwidth across the cluster;
- **Hadoop YARN** - (introduced in 2012) is a platform responsible for managing computing resources in clusters and using them for scheduling users' applications;
- **Hadoop [[MapReduce]]** - an implementation of the MapReduce programming model for large-scale data processing.
- **Hadoop Ozone** - (introduced in 2020) An object store for Hadoop

> Hadoop consists of the Hadoop Common package, which provides file system and operating system level abstractions, a MapReduce engine and the Hadoop Distributed File System (HDFS). The Hadoop Common package contains the **Java Archive (JAR) files** and scripts needed to start Hadoop.

![[Pasted image 20260719033923.png]]
### # Hadoop

####  # Storage Node

- Files are split in equal-sized blocks
- Blocks are replicated to DataNodes
- Send status messages to NameNode
	- Heartbeats
	- Block-Reports
	- Block-Received

![[Pasted image 20260719034720.png]]
####  # NameNode

- The master Daemon in Hadoop HDFS is NameNode. 
- It maintains and manages the file system namespace and provides the right access permission to the clients
- It's also stores Metadata like the number of blocks and their locations. 
- It consists mainly of files and directories and performs file system executions such as naming, closing and opening files.

![[Pasted image 20260719034548.png]]

>Before Hadoop 2.0.0, the NameNode was a single point of failure (SPOF) in an HDFS cluster. Each cluster had a single NameNode, and if NameNode fails, the cluster as a whole would be out services.
#### # Secondary NameNode

- Apart from DataNode and NameNode, there is another daemon called the Secondary NameNode
- Secondary NameNode works as a helper node to primary NameNode but doesn’t replace primary NameNode.

![[Pasted image 20260719034906.png]]

> There are also;
> * Checkpoint node: a node that periodically creates checkpoints of the namespace
> * Backup node (Checkpoint Helper) keeps an in-memory, up-to-date copy of the file system namespace
#### # DataNode

The second component is the slave Daemon and named the DataNode.
This HDFS component **stores the actual data** or blocks as it performs client-requested read and write functions. 

>This means DataNode also is responsible for replica creation, deletion and replication as instructed by the Master NameNode.

![[Pasted image 20260719033155.png]]

When a DataNode starts, it performs a handshake with the NameNode to verify the namespace ID, software version, and cluster information. If there is a mismatch, the DataNode is not allowed to join the cluster.

Since HDFS is location-aware, the NameNode knows where every data block resides. Hadoop schedules processing tasks on the nodes (or nearby racks) where the data already exists, minimizing network traffic and improving performance through data locality.

![[Pasted image 20260719032827.png]]

- **Job Tracker:** Job Tracker receives the requests for Map Reduce execution from the client. Job tracker talks to the Name Node to know about the location of the data that will be used in processing. The Name Node responds with the metadata of the required processing data.
- **Task Tracker:** It is the Slave Node for the Job Tracker and it will take the task from the Job Tracker. It also receives code from the Job Tracker. Task Tracker will take the code and apply on the file. The process of applying that code on the file is known as Mapper

### # Hadoop NameNode High Availability Architecture

![[Pasted image 20260719035252.png]]