An ACID Transaction secures that either all changes are successfully committed or rollbacked. It makes sure you never end in an inconsistent state. There is different concurrency control that, for example, guarantees consistency between reads and writes. Each [[Data Lake]] table format has other implementations and features here.

ACID transactions guarantee that each read, write, or modification of a table has the following properties:

- **Atomicity** - each statement in a transaction (to read, write, update or delete data) is treated as a single unit. Either the entire statement is executed, or none of it is executed. This property prevents data loss and corruption from occurring if, for example, if your streaming data source fails mid-stream.
- **Consistency** - ensures that transactions only make changes to tables in predefined, predictable ways. Transactional consistency ensures that corruption or errors in your data do not create unintended consequences for the integrity of your table.
- **Isolation** - when multiple users are reading and writing from the same table all at once, isolation of their transactions ensures that the concurrent transactions don’t interfere with or affect one another. Each request can occur as though they were occurring one by one, even though they’re actually occurring simultaneously.
- **Durability** - ensures that changes to your data made by successfully executed transactions will be saved, even in the event of system failure.
