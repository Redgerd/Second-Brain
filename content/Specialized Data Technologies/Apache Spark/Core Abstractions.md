![[Pasted image 20260531084310.png]]
### # RDDs (Resilient Distributed Datasets)
At the core, an RDD is an **immutable** **distributed** collection of elements of your data, partitioned across nodes in your cluster that can be operated in parallel with a low-level API that offers _transformations_ and _actions_.

RDD lives as an object in the JVM, pointing to data from external sources (HDFS, S3, Cassandra, etc). Every RDD carries its own metadata to enable fault tolerance and distributed execution. Some key components include:

- **Partitions**: chunks of data distributed across the cluster nodes. One partition = one unit of parallelism.
- **Dependencies**: lineage information, a list of parent RDDs and transformation history, forming a **lineage graph**. This lets Spark recompute lost data.
- **Computation**: the computation function applied to parent RDDs.
- **Preferred Locations**: hints where partitions are stored, enabling data-local execution.
- **Partitioner**: defines how data is split into partitions (like default `HashPartitioner` or `RangePartitioner`, etc).

![[Pasted image 20260531085017.png]]
#### # RDDs in Apache Spark 2.0
Spark 2.0 shifted the recommended programming model toward **DataFrames** and **Datasets**. While modern Spark has introduced higher-level abstractions like DataFrames and Datasets, RDDs remain the legacy foundation, giving Spark its original power and flexibility.

![[Pasted image 20260531085628.png]]
### # DataFrames

Like an RDD, a DataFrame is an **immutable** **distributed** collection of data. 
Unlike an RDD, data is organized into named columns, like a table in a relational database. 

A DataFrame is a Dataset organized into named columns. It is conceptually equivalent to a table in a relational database or a data frame in R/Python, but with richer optimizations under the hood. 
DataFrames can be constructed from a wide array of sources such as: structured data files, *tables in Hive, external databases, existing RDDs*
### # DataSet

A Dataset is a core data structure in Apache Spark that combines the benefits of RDDs and DataFrames. Datasets allow Spark to provide type-safety, optimized execution, and parallel processing. A Dataset is an immutable distributed collection of data, partitioned across nodes in a cluster, which can be operated on in parallel using high-level transformations and actions.
Each Dataset is divided into logical partitions, which may be processed on different nodes of the cluster. Datasets can contain any JVM object, including primitive types, complex objects, and user-defined classes.
## Benefits of Dataset APIs

### 1. Static-typing and runtime type-safety

In DataFrames and Datasets you can catch errors at compile time (which saves developer-time and costs). **However, it won't detect a non-existing column name until runtime.**

![[Pasted image 20260531085758.png]]

Dataset however is the most restrictive. Since Dataset APIs are all expressed as lambda functions and JVM typed objects, any mismatch of typed-parameters will be detected at compile time.
### 2. High-level abstraction and custom view into structured and semi-structured data

DataFrames as a collection of *Datasets(Row)* render a structured custom view into your semi-structured data. Suppose we are reading json file.
1. Spark reads the JSON, infers the schema, and creates a collection of DataFrames.
2. At this point, Spark converts your data into _DataFrame = Dataset(Row)_, a collection of generic Row object, since it does not know the exact type.
3. Now, Spark converts the _Dataset(Row) -> Dataset(DeviceIoTData)_ _**type-specific**_ Scala JVM object

With Dataset as a collection of _Dataset(ElementType) typed objects_, you seamlessly get both compile-time safety and custom view for strongly-typed JVM objects.
### 3. Performance and Optimization

DataFrame and Dataset APIs are built on top of the Spark SQL engine, it uses [Catalyst] to generate an optimized logical and physical query plan

![[Pasted image 20260531090233.png]]

Since Spark as a compiler understands your Dataset type JVM object, it maps your type-specific JVM object to [Tungsten] internal memory representation using Encoders. As a result, Tungsten Encoders can efficiently serialize/deserialize JVM objects as well as generate compact bytecode that can execute at superior speeds.