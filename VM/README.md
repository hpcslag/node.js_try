VM 虛擬機使用方法
==============
Resource:

http://blog.caesarchi.com/2011/09/nodejs-vm-module.html

http://nodejs.netease.com/topic/51f76656d6bc618c60069682

http://www.cnblogs.com/softlover/archive/2012/10/03/2707144.html

http://www.plurk.com/p/e2hbrf/nodeJS-VM-moduleexport-modulejavascriptnodejs

> 官方解說:   
> JavaScript code can be compiled and run immediately or compiled, saved, and run later.

>當我們需要執行一段程式 ，但是又不想寫成module的模式（使用require），這個時候可以採取vm ，來執行片段程式，簡單來說可以達到兩個目的：

> 1.部份程式片段抽離。
> 2.不使用全域變數污染環境。
