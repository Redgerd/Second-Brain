The CAP theorem states that a distributed system cannot simultaneously be **Consistent, Available, and Partition tolerant.**

Let’s take a detailed look at the three distributed system characteristics to which the CAP theorem refers.
#### # Consistency

Consistency means that all clients **see the same data at the same time**, no matter which node they connect to. For this to happen, whenever data is written to one node, it must be instantly forwarded or replicated to all the other nodes in the system before the write is deemed ‘successful.’
#### # Availability

Availability means that any client **making a request for data gets a response**, even if one or more nodes are down. Another way to state this—all working nodes in the distributed system return a valid response for any request, without exception.
#### # Partition tolerance

A partition is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes. Partition tolerance means that the **cluster must continue to work despite any number of communication breakdowns** between nodes in the system.
## # CAP Theorem for Databases and Partition Tolerance

In normal operations, your data store provides all three functions. But the CAP theorem maintains that when a distributed database experiences a network failure, you can provide either consistency or availability.

It’s a tradeoff. All other times, all three can be provided. But, in the event of a network failure, a choice must be made.

In the theorem, **partition tolerance is a must**. The assumption is that the system operates on a distributed data store so the system, by nature, operates with network partitions. Network failures will happen, so to offer any kind of reliable service, partition tolerance is necessary—the **P of CAP**

That leaves a decision between the other two, C and A. When a network failure happens, one can choose to guarantee consistency or availability:

![[Pasted image 20260601220055.png]]

#### The CAP Theorem vs. [[ACID Transactions]]  (Atomicity, Consistency, Isolation, and Durability)

Consistency in CAP is different than that of [ACID](https://www.bmc.com/blogs/acid-atomic-consistent-isolated-durable/). Consistency in CAP means having the most up-to-date information. (ACID refers to a different database event. In ACID, consistency means any new transaction to the database won’t corrupt the database.)
#### CAP Theorem System Design & NoSQL Databases

>> _“The modern CAP goal should be to maximize combinations of consistency and availability that make sense for the specific application. Such an approach incorporates plans for operation during a partition and for recovery afterward, thus helping designers think about CAP beyond its historically perceived limitations.”_

Choosing consistency and availability comes when choosing which database type to go with, such as **SQL vs NoSQL**. NoSQL databases can be classified based on whether they support high availability or high consistency.
##### NoSQL Databaseds

NoSQL databases have advantages over conventional relational databases. NoSQL JSON databases allow you to design without a schema. They can handle large datasets that contain unstructured data, without enforcing tables to relate to one another. Data is stored in JSON documents, which are complete entities that a human being can readily read and understand.  The benefits of NoSQL JSON databases include:

- **Scalable performance:** You can handle more data and high traffic by adding servers in clusters in a distributed architecture.
- **Strong resilience:** Because NoSQL databases work in distributed cloud environments, they are less prone to single points of failure and can easily replicate data across multiple nodes.
#### Prioritizing Consistency of Databases Using the CAP Theorem

Consistent databases should be used when the value of the information returned needs to be accurate. Financial data is a good example. Banking apps should return the exact value of a user’s account information. In this case, banks would rely on consistent databases. 

![[Pasted image 20260603234332.png]]
Database options for prioritizing the consistency component of the CAP theorem:
- MongoDB
- Redis
- HBase
#### Prioritizing Availability of Databases Using the Cap Theorem

Availability databases should be used when the service is more important than the information. An example of having a highly available database can be seen in e-commerce businesses. 

![[Pasted image 20260603234435.png]]
Database options for prioritizing the availability component of the CAP theorem:
- Cassandra
- DynamoDB
- Cosmos DB
#### # Further Reading 
- [An Illustrated Proof of the CAP Theorem](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
