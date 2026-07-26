MapReduce is a programming model for processing large datasets in parallel via map and reduce phases, foundational to the Hadoop ecosystem for batch workloads

- It MapReduce is a Java-based, distributed execution framework within the [[Data Transformation & Processing/Apache Hadoop|Apache Hadoop]]  Ecosystem.
- It takes away the complexity of distributed programming by exposing two processing steps that developers implement: 1) Map and 2) Reduce. 

In the **Mapping** step, data is split between parallel processing tasks. Transformation logic can be applied to each chunk of data. Once completed, the **Reduce** phase takes over to handle aggregating data from the Map set.. In general, MapReduce uses [[Data Transformation & Processing/Hadoop Distributed File System (HDFS)|Hadoop Distributed File System (HDFS)]] for both input and output. 

![[Pasted image 20260726185655.png]]
### # A little bit of  History

MapReduce was developed in the walls of G**oogle back in 2004 by Jeffery Dean and Sanjay Ghemawat of Google**. In their pap[er, “MAPREDUCE: SIMPLIFIED DATA PROCESSING ON LARGE CLUSTERS,”](https://research.google.com/archive/mapreduce-osdi04.pdf) and was inspired by the map and reduce functions commonly used in functional programming. 

At that time, Google’s proprietary MapReduce system ran on the [Google File System (GFS)](https://pdos.csail.mit.edu/6.824/papers/gfs.pdf). By 2014, Google was no longer using MapReduce as their primary big data processing model. MapReduce was once the only method through which the data stored in the HDFS could be retrieved, but that is no longer the case. 

Today, there are other query-based systems such as [Hive](https://www.databricks.com/glossary/apache-hive), that are used to retrieve data from the HDFS using SQL-like statements that run along with jobs written using the MapReduce model.
### # How does MapReduce work?

A MapReduce system is usually composed of three steps (even though it's generalized as the combination of Map and Reduce operations/functions). The MapReduce operations are:

- **Map:** The input data is first split into smaller blocks. 
  The Hadoop framework then decides how many mappers to use, based on the size of the data to be processed and the memory block available on each mapper server. 
  Each **block** is then assigned to a mapper for processing. 
  Each ‘**worker**’ node applies the map function to the local data, and writes the output to temporary storage. The primary (master) node ensures that only a single copy of the redundant input data is processed.
- **Shuffle** worker nodes redistribute data based on the output keys (produced by the map function), such that all data belonging to one key is located on the same worker node. 
  As an optional process the **combiner** (a reducer) can run individually on each mapper server to reduce the data on each mapper even further making reducing the data footprint and shuffling and sorting easier. 
  **Partition** (not optional) is the process that decides how the data has to be presented to the reducer and also assigns it to a particular reducer.
- **Reduce:** A reducer cannot start while a mapper is still in progress. Worker nodes process each group of `<key,value>` pairs output data, in parallel to produce `<key,value>` pairs as output. All the map output values that have the same key are assigned to a single reducer, which then aggregates the values for that key. Unlike the map function which is mandatory to filter and sort the initial data, the reduce function is optional.

![[Pasted image 20260726185738.png]]
### # Benefits 

- **Scalability:** MapReduce enables organizations to process petabytes of data stored in the HDFS across multiple servers or nodes.  
- **Faster processing:** With [parallel processing](https://www.ibm.com/think/topics/parallel-computing) and minimal data movement, MapReduce offers optimization of big data processing for massive volumes of data.  
- **Simplicity:** Developers can write MapReduce applications in their choice of programming languages, including Java, C++ and Python.  
- **Cost savings:** As an open source program, MapReduce can save an organization some budget on software expenses. That said, there will still be costs associated with infrastructure and data engineering staff.

### # Limittaion

**Rigid  programming paradigm**

While exposing Map and Reduce interfaces to programmers has simplified the creation of distributed applications in [Hadoop](https://www.databricks.com/glossary/hadoop), it is difficult to express a broad range of logic in a Map Reduce programming paradigm. 

>Iterative process is an example of logic that does not work well in Map Reduce. 
>In general, data is not kept in memory, and iterative logic is handled by chaining MapReduce applications together resulting in increased complexity.

**Read/Write Intensive**

MapReduce jobs store little data in memory as it has no concept of a distributed memory structure for user data. Data must be read and written to HDFS. More complex MapReduce applications involve chaining smaller MapReduce jobs together. Since data cannot be passed between these jobs, it will require data sharing via HDFS. This introduces a processing bottleneck.

**Java Focused**

MapReduce is Java-based, and hence the most efficient way to write applications for it will be using java. Its code must be compiled in a separate development environment, then deployed into the [Hadoop cluster](https://www.databricks.com/glossary/hadoop-cluster). This style of development is not widely adopted by Data Analysts nor Data Scientists who are used to other technologies like SQL or interpreted languages like Python. MapReduce does have the capability to invoke Map/Reduce logic written in other languages like C, Python, or Shell Scripting. However, it does so by spinning up a system process to handle the execution of these programs. This operation introduces overhead which will affect the performance of the job.

**Phased out from Big Data offerings**

MapReduce is slowly being phased out of Big Data offerings. While some vendors still include it in their [Hadoop distribution](https://www.databricks.com/solutions/migration/hadoop), it is done so to support legacy applications. Customers have moved away from creating MapReduce applications, instead adopting simpler and faster frameworks like Apache Spark.