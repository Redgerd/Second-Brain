The CAP theorem states that a distributed system cannot simultaneously be **Consistent, Available, and Partition tolerant.**

Let’s take a detailed look at the three distributed system characteristics to which the CAP theorem refers.
#### # Consistency

Consistency means that all clients see the same data at the same time, no matter which node they connect to. For this to happen, whenever data is written to one node, it must be instantly forwarded or replicated to all the other nodes in the system before the write is deemed ‘successful.’
#### # Availability

Availability means that any client making a request for data gets a response, even if one or more nodes are down. Another way to state this—all working nodes in the distributed system return a valid response for any request, without exception.
#### # Partition tolerance

A partition is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes. Partition tolerance means that the cluster must continue to work despite any number of communication breakdowns between nodes in the system.

### # CAP Theorem for Databases and Partition Tolerance

In normal operations, your data store provides all three functions. But the CAP theorem maintains that when a distributed database experiences a network failure, you can provide either consistency or availability.

It’s a tradeoff. All other times, all three can be provided. But, in the event of a network failure, a choice must be made.

In the theorem, **partition tolerance is a must**. The assumption is that the system operates on a distributed data store so the system, by nature, operates with network partitions. Network failures will happen, so to offer any kind of reliable service, partition tolerance is necessary—the **P of CAP**

That leaves a decision between the other two, C and A. When a network failure happens, one can choose to guarantee consistency or availability:

![[Pasted image 20260601220055.png]]
#### # Further Reading 
- [An Illustrated Proof of the CAP Theorem](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
