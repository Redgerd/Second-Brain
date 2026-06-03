A **shuffle is the physical movement of data between partitions across worker nodes**, where rows are redistributed based on a key or partitioning function. This means that data originally stored in one executor may need to be transferred to another executor if the required grouping or computation demands it.

![[Pasted image 20260604031807.png]]
#### How Spark Scheduling Leads to Shuffle ?

**DAGScheduler** takes the logical execution plan and converts it into a physical execution plan. During this process, it groups transformations into stages based on dependencies between RDDs. When RDDs are connected through **narrow dependencies**, they remain in the same stage, meaning data flows locally without movement across executors. However, when Spark encounters a **broad dependency**, it cannot continue within the same stage because data needs to be redistributed across partitions.

![[Pasted image 20260604031343.png]]

At this point, the DAG is split into multiple stages. The scheduler identifies boundaries where data must move across the cluster and cuts the execution plan accordingly. This results in two major types of stages: **ShuffleMapStages**, which prepares and outputs intermediate shuffled data, and the final **ResultStage**, which produces the final output of the computation. 

![[Pasted image 20260604032155.png]]

Each **ShuffleMapStage** is responsible for generating shuffle files that will be consumed by the next stage, ensuring that intermediate data is properly organized before further processing.
#### What happens in Execution ?

Once these stages are defined, the actual shuffle process begins between them. 

![[Pasted image 20260604031454.png]]

Once Spark identifies a shuffle boundary, it begins the process of redistributing data between stages. During a shuffle, intermediate data is written to local disk by the map tasks and then transferred across the network to the executors responsible for the next stage. 

>Spark uses a **pull-based model**, meaning that reduce tasks fetch the required data from the map-side outputs rather than having the data pushed to them automatically.

- Each map task partitions its output using a hash function (hash calculation to each record's key to determine which partition the record should be sent to)

- Records belonging to the same target partition are grouped together and written sequentially into shuffle files on disk. 

![[Pasted image 20260604032512.png]]

Since shuffle involves **all-to-all communication**, data produced by every map task may need to be sent to multiple reduce tasks. To reduce the amount of data transferred over the network, Spark performs **local (map-side) aggregation** whenever possible, combining records with the same key before sending them to reducers. **This decreases network traffic and improves performance.**
#### # Shuffle is the most expensive operation in Spark 

**Spark does not move data randomly**; instead, it uses a structured mechanism where each record is assigned to a target partition. This causes data rows to travel across the network between machines, making shuffle **one of the most expensive operations in Spark**. Because it involves disk writes, network transfer, and data serialization, it significantly impacts performance. For this reason, Spark tries to avoid shuffle whenever possible and **only performs it when absolutely necessary**, such as during joins, aggregations, or sorting operations where data must be reorganized globally.


