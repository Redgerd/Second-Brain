Slowly Changing Dimensions (SCD) are techniques used to track changes in dimension data over time. They help maintain historical records while ensuring accurate reporting and analysis. SCD is commonly used for dimensions such as customers, products, employees, and locations.

- Tracks changes in dimension data while preserving historical information.
- Ensures data accuracy and consistency for business reporting and analytics.
- Provides different methods to handle data changes based on business requirements.

| **SCD Type**                   | **How It Works**                                                                                                                              | **History Maintained** | **Common Use Case**                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------- |
| **Type 1 (Overwrite)**         | The old value is replaced with the new value, and no history is maintained.                                                                   | No                     | When historical information is not required.                   |
| **Type 2 (Add New Row)**       | A new record is created for each change, typically using surrogate keys, effective dates, and current-record indicators.                      | Complete               | When full historical tracking of changes is required.          |
| **Type 3 (Add New Attribute)** | Additional columns are added to store previous values. This allows limited historical tracking, usually only the current and previous values. | Limited                | When only the current and previous values need to be retained. |

![[Pasted image 20260718034211.png]]
# Slowly Changing Dimension - Type 2 (SCD2)

Slowly Changing Dimension Type 2 (SCD2) is a fundamental [[Modern Data Infrastructure/Data Warehouse|Data Warehouse]] technique that preserves the historical changes in dimensional data over time.

- Unlike **Type 1** which overwrites old values, SCD2 **maintains a complete history** by creating new records whenever tracked attributes change, while keeping the previous versions.
- Each record contains effective dates or version numbers to indicate when it was active, making it possible to accurately reconstruct the state of data at any point in time.
- This is particularly valuable in business intelligence where understanding historical changes in customer information, product details, or organizational structures is crucial for accurate reporting and analysis.
# # SCD2 vs. Snapshotting

[[Snapshotting]] your dimensions for a variety of reasons, and for reasons that are not immediately related to this entity-centric approach. The practice can be described as keeping a full snapshot of your dimension, for every single day in the past. This is a lazy alternative to slowly changing dimension modeling techniques that offer the following benefits/tradeoffs:

- Easy to manage and maintain, minimizing mutations and fitting the functional approach to data engineering
- Easy point-in-time querying / comparisons
- Easy time-series analysis on how entities are evolving over time
- Increased, super redundant storage of information - but who cares in the infinite cheap storage/compute world, especially given dimensions being relatively small in relation to facts
## # Implementation Methods (Examples)

SCD2 method tracks historical data by creating multiple records for a given  [natural key](https://en.wikipedia.org/wiki/Natural_key) in the dimensional tables with separate Surrogate Keys and/or different version numbers.

Unlimited history is preserved for each insert. The natural key in these examples is the “Supplier_Code” of “ABC”.
### # Version-Based Tracking

This method uses sequential version numbers to track changes. For example, when a supplier changes location:

|Supplier_Key|Supplier_Code|Supplier_Name|Supplier_State|Version|
|---|---|---|---|---|
|123|ABC|Acme Supply Co|CA|0|
|124|ABC|Acme Supply Co|IL|1|
|125|ABC|Acme Supply Co|NY|2|
### # Effective Date Tracking

Uses date ranges to track changes:

|Supplier_Key|Supplier_Code|Supplier_Name|Supplier_State|Start_Date|End_Date|
|---|---|---|---|---|---|
|123|ABC|Acme Supply Co|CA|2000-01-01T00:00:00|2004-12-22T00:00:00|
|124|ABC|Acme Supply Co|IL|2004-12-22T00:00:00|`NULL`|

The Start date/time of the second row is equal to the End date/time of the previous row. The null End_Date in row two indicates the current tuple version. A standardized surrogate high date (e.g. 9999-12-31) may instead be used as an end date, so that the field can be included in an index, and so that null-value substitution is not required when querying. In some database software, using an artificial high date value could cause performance issues, that using a null value would prevent.
### # Current Flag Method

Combines effective date with a current status flag:

|Supplier_Key|Supplier_Code|Supplier_Name|Supplier_State|Effective_Date|Current_Flag|
|---|---|---|---|---|---|
|123|ABC|Acme Supply Co|CA|2000-01-01T00:00:00|N|
|124|ABC|Acme Supply Co|IL|2004-12-22T00:00:00|Y|

The Current_Flag value of ‘Y’ indicates the current tuple version.
### # Further Reading
- [Slowly changing dimension - Wikipedia](https://en.wikipedia.org/wiki/Slowly_changing_dimension).