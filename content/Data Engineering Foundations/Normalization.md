**Database normalization** is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed in the early 1970s by British computer scientist **Edgar F. Codd** as part of his [[Relational Model]]
He defined the Normal Form into four categories:

- **Denormalized:** No normalization. Nested and redundant data is allowed. What we do on purpose with [[Dimensional Modeling]] with dimension.
- **First Normal form (1NF)**: Each column is unique and has a single value. The table has a unique primary key.
- **Second Normal form (2NF)**: The requirements of 1NF, plus partial dependencies are removed.
- **[Third Normal Form](https://www.ssp.sh/brain/third-normal-form)**: The requirements of 2NF, plus each table contains only relevant field related to its primary key and has no transitive dependencies.
    - There is no duplication (following DRY - Don't Repeat Yourself) that addresses are modeled out into a separate table and not held inside customers, for example. Countries are its own table not inside the geographic table, etc.

