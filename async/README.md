Resource
=========
PPT: https://docs.google.com/presentation/d/1jlgfNxqrzDXbAXQR0yENNMUaBXnpAAt2yJ7Y42tU-MY/edit#slide=id.gc353fa3a_080

ALSOTANG BLOG: http://fxck.it/post/53092978207

Official Document: https://github.com/caolan/async#each

好文:
> 一、设想场景：
> 
> 有一个 Array，里面包含了 100 个图片 URL 地址，其中有些地址失效了。
> 
> 要通过遍历的方式检测哪些有效哪些失效，Node.js 中该怎么办？
> 
> 思路:
> 
> 由于只判断是否存在，所以设计到的流量和计算量其实都是很小的，但如果用同步的方式发起 100 个连接去检测的话，IO > 时间是不可忍受的。这时，如果是在同步的程序中，我们就会通过多线程之类的方式来分发这些连接。而在 Node.js 中，并没有线程可用，如果不通过 Async.js 来完成的话，写出来的代码会很绕很绕的。
> 
> 答案在这里：https://github.com/caolan/async#filterarr-iterator-callback
> 
> 二、设想场景：
> 
> 与『一』中同样，有一个 Array，里面包含了 100 个图片 URL 地址，其中有些地址失效了。
> 
> 要取出其中某个有效的图片地址，Node.js 中怎么办？
> 
> 答案在这里：https://github.com/caolan/async#detect
> 
> 如果看官你看得懂这些答案的话，不知你会不会跟我有一样的感受，就是以上两个场景用 Node.js 写反而比用 Python 或者 Ruby 来写要方便。我想原因主要是在于 JS 中的匿名函数非常好用，以及以上的 filter 和 detect 都是『函数式编程』的骨架。
> 
> 三、设想场景
> 
> 有一个 Array，里面有 100 个图片的 URL 地址，全都是有效的。
> 
> 要获取这些图片，Node.js 中怎么办？
> 
> 答案在这里：https://github.com/caolan/async#paralleltasks-callback 和 https://github.com/caolan/async#map
> 
> 四、设想场景
> 
> 程序要去某个地址取一段数据，函数是 get_data。程序还要在某个网络文件服务器上新建一个文件夹，函数是 make_folder。程序在得到数据和创建好文件夹后，需要向文件夹写入文件，函数是 write_file。写入完成后，程序需要根据这个文件的地址通过邮件发送给某个用户，函数是 email_link。
> 
> 思路：
> 
> get_data 和 make_folder 是可以并发进行的，在他们完成后，才能执行 write_file。write_file 完成后，email_link 才可执行。也就是说，这个逻辑中既存在可以并发执行的过程，也存在需要依赖之前过程已完成的过程。
> 
> Async.js 可以简单地自动完成这一流程的控制，答案在：https://github.com/caolan/async#autotasks-callback