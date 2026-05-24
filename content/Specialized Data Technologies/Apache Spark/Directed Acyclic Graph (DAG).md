Instead of rigid, hardcoded pipelines of Map → Shuffle → Reduce, Spark builds a **Directed Acyclic Graph (DAG)** as it ingests your transformations: a blueprint of operations and dependencies that spells out exactly how your job will execute.
#### What is a DAG ?

 DAG in Spark is just a graph with two key properties:
 
- **Directed**: every edge points one way — there's a clear "before" and "after"
- **Acyclic**: there are no cycles — once you move forward, you cannot loop back

![[Pasted image 20260525033631.png]]

- **Nodes** in this graph are your RDD transformations and actions: `map`, `filter`, `flatMap`, `reduceByKey`, and so on.
- **Edges** represent the dependencies between those operations: I can't run this `reduceByKey` until the map and filter that precede it have finished.
#### DAG Construction

When you define a chain of transformations nothing executes yet. Spark's driver program records each call, building up that logical DAG in memory. These nodes and edges stack up until you finally call an action: Spark convertS the logical DAG into a physical execution plan and start processing.

![[Pasted image 20260525033746.png]]

But before Spark can start processing, the logical DAG must be split into stages. A **stage** is a sequence of operations that can be executed without a shuffle. Narrow transformations like `map`, `filter`, and `flatMap` — process data locally on each partition, so Spark fuses them into the same stage. The moment a wide transformation appears—such as `reduceByKey`, `groupByKey`, or `join` — a shuffle is required, and Spark cuts the DAG, starting a new stage.
#### Why Spark Builds a DAG

Imagine you're using classic Hadoop [[MapReduce]]. You write one Map job, it writes to disk, then a Reduce job reads from disk, does its work, and writes to disk again. 

On each step, the framework forces you to materialize data to HDFS, incurring heavy I/O and disk seeks. To make matters worse, you have zero understanding into the global structure of your computation — you only see one stage at a time.

Spark's approach — _don't run a thing until you have to_. Record your intentions, compile them into a DAG, then optimize across the whole graph before you fire off any tasks. That gives Spark two massive advantages:

1. **Global optimization**. The DAG allows Spark to treat your code as a full graph, not just a sequence of steps. It sees the entire dependency chain and can make both global and local optimizations — like reordering operations, collapsing stages, or adjusting partitioning dynamically (especially with [AQE](https://spark.apache.org/docs/latest/sql-performance-tuning.html#adaptive-query-execution) enabled).
2. **Fault tolerance via lineage**. Because Spark knows the entire history of your operations, if a partition goes missing, it only recomputes the lost data by re‐applying the minimal needed transformations — not full job restarts.

The DAG-based execution model is a big reason why Spark can handle complex workloads across massive datasets while minimizing the overhead typically associated with distributed processing. Without the DAG, Spark would lose much of its flexibility, speed, and fault tolerance.
