
## <a href="https://www.eventedmind.com/classes/rpc-meteor" target="_blank">Class: RPC with Meteor Methods</a>

**Meteor**<br>
****

A Meteor remote procedure call (RPC) invokes a function on the server from the client using DDP. You're using RPC every time you insert, update or remove a document from a minimongo collection or making a Meteor method call. We'll take a detailed look at how a document write to a mongo collection gets synchronized between the client and the server. Finally, we'll look at how to improve performance by unblocking method calls.

**What's in this class?**


* <a href="https://www.eventedmind.com/classes/rpc-meteor/introduction-to-meteor-methods-012c8ab0" target="_blank">Introduction to Meteor Methods</a> - In this class we'll cover Meteor's RPC (Remote Procedure Call) implementation, which Meteor calls Meteor Methods. You can call a function on the server from the client using Meteor.call().

* <a href="https://www.eventedmind.com/classes/rpc-meteor/a-tour-of-meteor-methods-cf5e519d" target="_blank">A Tour of Meteor Methods</a> - Meteor methods is an implementation of remote procedure calls (RPC). It lets a client call a function on the server and get a result over the wire. We'll start off by looking at some code examples of defining and using methods. You'll see how to define and call a method as well as how to compensate for latency by defining a method "stub."

* <a href="https://www.eventedmind.com/classes/rpc-meteor/the-mechanics-of-methods" target="_blank">The Mechanics of Methods</a> - What actually happens when you make a Meteor method call? In this video we'll explore the DDP messages and mechanics behind a Meteor method call.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/collections-use-methods" target="_blank">Collections Use Methods</a> - Meteor Collections actually use Meteor Methods under the hood to send "writes" (insert, update, remove) to the server. In this video we'll look at a few examples.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/the-invalidation-crossbar" target="_blank">The Invalidation Crossbar</a> - Meteor uses a data structure called the Invalidation Crossbar notify listeners that something has changed. For example, Mongo Livedata uses this structure to let observers know about a write to a document. In this video we'll explore how this data structure works.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/methods-writefence" target="_blank">Using the Write Fence</a> - When you make a Meteor method call, the server sends the "updated" message once all writes on the server have been committed. It does this using a data structure called a Write Fence. In this video we'll explore the Write Fence by using it in our application.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/synchronizing-method-writes" target="_blank">Synchronizing Method Writes</a> - Meteor synchronizes writes that happen on the client with the result we ultimately get back from the server. In this video you'll get some intuition about what this means.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/mechanics-of-method-writes" target="_blank">Mechanics of Method Writes</a> - In this video we'll dive deeper into writing a document in a method by diagraming how Meteor actually synchronizes a write between a client and the server.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/writing-our-own-local-cache" target="_blank">Writing Our Own Local Cache</a> - In our applications we use Minimongo in the browser as the local data cache. But in this video we'll build our own simple local cache so you can better see how it works with Livedata to keep data in sync between the client and server.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/saving-and-retrieving-original-documents" target="_blank">Saving and Retrieving Original Documents</a> - We'll complete our implementation of a local cache by adding the saveOriginals and retrieveOriginals methods.

* <a href="https://www.eventedmind.com/classes/rpc-meteor/unblocking-a-method" target="_blank">Unblocking a Method</a> - Meteor DDP messages are processed sequentially, each in their own Fiber. This means our publish functions and methods are run one after the other and if one of those functions pauses its fibers, the rest of the messages have to wait. We can unblock the message queue by using this.unblock in our methods. In this video I'll show you how messages get processed on the server and what it means to unblock a method.



