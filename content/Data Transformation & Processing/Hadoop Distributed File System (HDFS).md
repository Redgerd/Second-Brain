Hadoop Distributed File System (HDFS) is the distributed storage layer of Hadoop. It is designed to store very large files across multiple machines (DataNodes) while providing high throughput, fault tolerance, and scalability.

> Instead of storing a file on a single machine, HDFS **splits it into large blocks** (typically **128 MB**) and distributes those blocks across multiple DataNodes in a cluster.
### # HDFS architecture

![[Pasted image 20260719035702.png]]

- 